import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  isPin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  pinUnPin(){
    this.isPin = !this.isPin;            
}

}
