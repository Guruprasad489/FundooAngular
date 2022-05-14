import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/Services/notesServices/notes.service';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/Services/DataService/data.service';
import { CollabService } from 'src/app/Services/collabService/collab.service';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  iconMsg : any;
  searchString:any;
  collabList:any;

  @Input() notesArray: any;
  //@Output() updateNoteEvent = new EventEmitter<any>();
  @Output() updatedIconData = new EventEmitter<any>();
  constructor(public dialog: MatDialog, private notesService: NotesService, private _snackBar: MatSnackBar, private dataService: DataService,
    private collabService: CollabService) {  }

  ngOnInit(): void {
    this.dataService.recievedData.subscribe((response: any) => {
      console.log("Data recieved", response);
      this.searchString = response
    })
  
    this.getCollabsList();
  }

  openDialog(note:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      width: '700px',
      maxHeight: '600px',
      data: note
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed:', result);
      this.iconRefresh(result)
    });
  }

  pinUnPin(note: any) {
    note.isPin = !note.isPin;
    // console.log(note.isPin)
    this.notesService.pinNote(note.noteId).subscribe((response: any) => {
      console.log("Note Pin status changed", response);
      this.updatedIconData.emit(response);

      if (response.data.isPin == true) {
        this._snackBar.open('Note Pinned', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
      else {
        this._snackBar.open('Note UnPinned', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
    })
  }

  iconRefresh($event:any){
    this.iconMsg = $event;
    this.updatedIconData.emit(this.iconMsg);
    this.getCollabsList()
  }

  getCollabsList(){
    this.collabService.getCollabsList().subscribe((response: any) => {
      this.collabList = response.data;

      console.log("Getall Collaborator Success", response);
      
      // this.changeNoteEvent.emit(response);
      
    })
  }

}

