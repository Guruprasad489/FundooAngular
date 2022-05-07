import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() notesArray: any;
  constructor(public dialog: MatDialog) { /*console.log(this.notesArray);*/ }

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
    });
  }

  pinUnPin(note: any) {
    note.isPin = !note.isPin;
    console.log(note.isPin)
  }

  iconRefresh(eventData:any){

  }

}

