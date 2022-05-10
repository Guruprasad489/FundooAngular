import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/Services/notesServices/notes.service';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  iconMsg : any;

  @Input() notesArray: any;
  //@Output() updateNoteEvent = new EventEmitter<any>();
  @Output() updatedIconData = new EventEmitter<any>();
  constructor(public dialog: MatDialog, private notesService: NotesService, private _snackBar: MatSnackBar) { /*console.log(this.notesArray);*/ }

  ngOnInit(): void {
    // console.log(this.notesArray);
  }

  openDialog(note:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      width: '700px',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed:' + result);
      this.iconRefresh(result)
    });
  }

  pinUnPin(note: any) {
    note.isPin = !note.isPin;
    // console.log(note.isPin)
    this.notesService.pinNote(note.noteId).subscribe((response: any) => {
      console.log("Note Pin status changed", response.data);

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
  }

}

