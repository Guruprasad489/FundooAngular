import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
 noteList : any=[]; 
  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.notesService.getAllNotes().subscribe((response:any)=>{
      // console.log("GetAll Notes successful", response.data);
      this.noteList = response.data;
      this.noteList.reverse();
      // console.log(this.noteList);
    })
  }

  refresh(eventData:any){
    // console.log(eventData);
    this.noteList.reverse();
    this.noteList.push(eventData.data);
    this.noteList.reverse();
    // console.log(this.noteList)
    
    // this.getAllNotes();
  }

  

}
