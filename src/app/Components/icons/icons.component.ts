import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  isArchive: any;
  isTrash: any;
  url = '';

  colorsArr = [{Colorcode:"white", name:"White"},{Colorcode:"#f28b82", name:"Red"},{Colorcode:"#fbbc04", name:"Orange"},{Colorcode:"#fff475", name:"Yellow"},{Colorcode:"#ccff90", name:"Green"},{Colorcode:"#a7ffeb", name:"Teel"},
               {Colorcode:"#cbf0f8", name:"Blue"},{Colorcode:"#aecbfa", name:"Dark-Blue"},{Colorcode:"#d7aefb", name:"Purple"},{Colorcode:"#fdcfe8", name:"Pink"},{Colorcode:"#e6c9a8", name:"Brown"},{Colorcode:"#e8eaed", name:"Gray"}];
  //colorsArr = ["white","#f28b82","#fbbc04","#fff475","#ccff90","#a7ffeb","#cbf0f8","#aecbfa","#d7aefb","#fdcfe8","#e6c9a8","#e8eaed"];

  @Input() noteObj: any;
  @Output() changeNoteEvent = new EventEmitter<any>();

  constructor(private notesService: NotesService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.isArchive = this.noteObj.isArchive;
    this.isTrash = this.noteObj.isTrash;
  }

  trash(note: any) {
    this.isTrash = !note.isTrash;
    this.notesService.trashNote(this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note trash status changed", response.data);
      this.changeNoteEvent.emit(response);

      if (response.data.isTrash == true) {
        this._snackBar.open('Note moved to Bin', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
      else {
        this._snackBar.open('Note restored', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
    })
  }

  archiveUnArchive(note: any) {
    this.isArchive = !note.isArchive;
    this.notesService.archiveNote(this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note Archive status changed", response.data);
      this.changeNoteEvent.emit(response);

      if (response.data.isArchive == true) {
        this._snackBar.open('Note Archived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
      else {
        this._snackBar.open('Note Unarchived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
    })
  }

  delete() {
    this.notesService.deleteNote(this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.changeNoteEvent.emit(response);

      this._snackBar.open('Note Deleted Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  changeColor(newcolor: any) {
    this.notesService.changeColor(newcolor, this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note Background Color Changed Successfully", response);
      this.changeNoteEvent.emit(response);
    })
  }

  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      console.log(event)
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {                // called once readAsDataURL is completed
        //this.url = event.target.result;
        this.addImage();
      }
    }
  }

  addImage() {
    //let imagePath = "/assets/Phoho_Gallery/"+this.image;
    this.notesService.uploadImage(this.url, this.noteObj.noteId).subscribe((response: any) => {
      console.log("Image Successfully added to Note", response);
      this.changeNoteEvent.emit(response);
    })
  }  

}
