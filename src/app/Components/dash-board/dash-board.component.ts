import { Component, OnInit } from '@angular/core';
// import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  public sidenavText : boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

 

  // sideNav(){
  //   this.sidenavText = !this.sidenavText
  // }

}
