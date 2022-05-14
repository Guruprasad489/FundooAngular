import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CollabService } from 'src/app/Services/collabService/collab.service';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {
  collabEmail : any;
  noteId : any;
  collabObj: any;

  constructor(private collabService: CollabService, private _snackBar: MatSnackBar, 
     public dialogRef: MatDialogRef<CollabComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.noteId = data.note.noteId
      this.collabObj = data.collab
      console.log(this.collabObj)
   }

  ngOnInit(): void {
  }

  addCollab(){

    this.collabService.addCollab(this.noteId, this.collabEmail).subscribe((response: any) => {
      console.log("Collaborator Successfully added to Note", response);
      // this.changeNoteEvent.emit(response);
      this.collabEmail = '';
      this._snackBar.open(response.message, '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    },
      (error:any) => {
        console.log("Collaborator Failed", error);
        this.collabEmail = '';
        this._snackBar.open(error.error.message, '', {
          duration: 3000,
          verticalPosition: 'bottom'
      })
    })
  }

  removeCollab(collabId:any){
    this.collabService.removeCollab(collabId, this.noteId).subscribe((response: any) => {
      console.log("Collaborator removed", response);
      // this.changeNoteEvent.emit(response);

      this._snackBar.open('Collaborator removed Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  save(){

    this.dialogRef.close();
  }

  cancel(){

    this.dialogRef.close();
  }



}
