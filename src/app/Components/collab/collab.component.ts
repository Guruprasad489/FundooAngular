import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CollabService } from 'src/app/Services/collabService/collab.service';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {
  collabEmail : any='';
  noteId : any;
  // collabObj: any;
  collabResponse:any=[];
  name:any;
  email:any;

  @Output() changeCollabEvent = new EventEmitter<any>();


  constructor(private collabService: CollabService, private _snackBar: MatSnackBar, 
     public dialogRef: MatDialogRef<CollabComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.noteId = data.noteId
      // this.collabObj = data.collab
      // console.log(this.collabObj)
      this.name = localStorage.getItem('name');
      this.email = localStorage.getItem('email');
   }

  ngOnInit(): void {
    
    this.getAllCollabs();
   
  }

  addCollab(){
    var regex = /^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$/g
    if(regex.test(this.collabEmail)) {
      this.collabService.addCollab(this.noteId, this.collabEmail).subscribe((response: any) => {
        console.log("Collaborator Successfully added to Note", response);
        this.getAllCollabs();
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
    else{
      this._snackBar.open('Enter valid Email-Id', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }
  }

  removeCollab(collabId:any){
    this.collabService.removeCollab(collabId, this.noteId).subscribe((response: any) => {
      console.log("Collaborator removed", response);
      this.getAllCollabs();
      this._snackBar.open('Collaborator removed Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  getAllCollabs(){
    if(this.noteId !== (null || undefined)){
      this.collabService.getAllCollabs(this.noteId).subscribe((response: any) => {
        this.collabResponse = response.data;
        
        console.log("Getall Collaborator Success", response);
      })
    }
  }

  save(collabResponse:any){
    this.dialogRef.close(collabResponse);
    this.changeCollabEvent.emit(collabResponse);
  }

  cancel(collabResponse:any){
    this.dialogRef.close(collabResponse);
    this.changeCollabEvent.emit(collabResponse);
  }

}
