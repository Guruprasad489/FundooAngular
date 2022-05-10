import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteList : any=[]; 
  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
    this.geTrashlist();
  }

  geTrashlist(){
    this.notesService.getAllNotes().subscribe((response:any)=>{
      console.log("GetAll trash Notes successful", response.data);
      this.noteList = response.data;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isTrash===true
      })
      // console.log(this.noteList);
    })
  }

  updatedIcon(iconEvent:any){
    this.geTrashlist();
  }
}
