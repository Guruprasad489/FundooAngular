import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  noteData: any;
  constructor(public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private notesService: NotesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // console.log(this.data)
    this.noteData = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  pinUnPin() {
    //console.log(this.noteData.isPin)
    this.noteData.isPin = !this.noteData.isPin;
  }

  updateNote() {
    this.notesService.updateNote(this.noteData, this.data.noteId).subscribe((response: any) => {
      console.log("Note updated successfully", response);
      // this.createNoteEvent.emit(response);

      this._snackBar.open('Note updated successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    });
  }
}
