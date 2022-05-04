import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  public takeNote : boolean=false;
  public title: any;
  public description : any;
  constructor() { }

  ngOnInit(): void {
    
  }

  createNote(){
    console.log(this.title,
      this.description)
    this.takeNote = true
  }
  
  closeNote(){
    this.takeNote = false
  }

}
