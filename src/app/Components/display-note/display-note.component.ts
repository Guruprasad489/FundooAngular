import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  // isPin: boolean = false;

  constructor(public dialog: MatDialog) { console.log(this.notesArray); }
  @Input() notesArray: any;

  ngOnInit(): void {
    console.log(this.notesArray);
  }

  pinUnPin(isPin: boolean) {
    console.log(isPin)
    isPin = !isPin;
  }

  openDialog(note:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      width: '600px',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed:' + result);
    });
  }

}

