import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  isArchive : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  archiveUnArchive(){
    this.isArchive = !this.isArchive;            
}

}
