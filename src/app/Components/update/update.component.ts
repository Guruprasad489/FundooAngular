import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  // noteData: any;

  title: any
  description: any
  color: any
  image: any
  // reminder: any;
  isArchive: any
  isPin: any
  isTrash: any
  noteId: any

  @Output() updateNoteEvent = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private notesService: NotesService, private _snackBar: MatSnackBar) {
    this.title = data.title
    this.description = data.description
    this.color = data.color
    this.image = data.image
    //this.reminder = data.reminder
    this.isArchive = data.isArchive
    this.isPin = data.isPin
    this.isTrash = data.isTrash
    this.noteId = data.noteId
  }

  ngOnInit(): void {
    // console.log(this.data)
    // this.noteData = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  pinUnPin() {
    this.isPin = !this.isPin;
    //console.log(this.isPin)
  }

  updateNote() {
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {

      let reqData = {
        Title: this.title,
        Description: this.description,
        color: this.color,
        image: this.image,
        // reminder: this.reminder,
        isArchive: this.isArchive,
        isPin: this.isPin,
        isTrash: this.isTrash
      }
      this.notesService.updateNote(reqData, this.noteId).subscribe((response: any) => {
        console.log("Note updated successfully", response);
        this.updateNoteEvent.emit(response.data);
        this.dialogRef.close(response);

        this._snackBar.open('Note updated successfully', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      });
    }
    else {
      console.log("Both Title and Description should not be null or empty");
      this._snackBar.open('Both Title and Description should not be empty', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }
  }

  iconRefresh(event:any){
      if(event.data != (null || undefined)){
      this.color = event.data.color
      this.image = event.data.image
      if(event.data.isTrash==true || event.data.isArchive==true){
        this.dialogRef.close();
      }
    }
    if(event.message == 'Image Removed Successfully'){
      this.image =null
    }
  }
}
