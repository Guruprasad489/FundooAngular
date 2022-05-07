import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  isArchive: boolean = false;
  isTrash : boolean = false;

  @Input() noteObj: any;
  @Output() changeNoteEvent = new EventEmitter<any>();

  constructor(private notesService: NotesService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

  trash(noteObj:any) {
    noteObj.isTrash = !noteObj.isTrash;
    this.notesService.trashNote(this.noteObj, this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note moved to Bin", response.data);
      this.changeNoteEvent.emit(response.data);

      this._snackBar.open('Note moved to Bin', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  archiveUnArchive(noteObj:any) {
    noteObj.isArchive = !noteObj.isArchive;
    this.notesService.archiveNote(this.noteObj, this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note Archive status changed", response.data);
      this.changeNoteEvent.emit(response.data);

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

}
