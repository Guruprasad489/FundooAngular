import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
 noteList : any=[]; 
 noteListUnpinned : any=[]; 

  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.noteList = this.notesService.TestNotes;
    this.noteList = this.noteList.filter((object:any)=>{
      return object.isArchive===false && object.isTrash===false && object.isPin===true
    })
    this.noteListUnpinned = this.notesService.TestNotes;
    this.noteListUnpinned = this.noteListUnpinned.filter((object:any)=>{
      return object.isArchive===false && object.isTrash===false && object.isPin===false
    })
    this.notesService.getAllNotes().subscribe((response:any)=>{
      console.log("GetAll Notes successful", response.data);
      this.noteList = response.data;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive===false && object.isTrash===false && object.isPin===true
      })

      this.noteListUnpinned = response.data;
      // this.noteListUnpinned.reverse();
      this.noteListUnpinned = this.noteListUnpinned.filter((object:any)=>{
        return object.isArchive===false && object.isTrash===false && object.isPin===false
      })
      // console.log(this.noteList);
    })
  }

  refresh(eventData:any){
    // console.log(eventData);
    this.noteList.reverse();
    this.noteList.push(eventData.data);
    this.noteList.reverse();
    console.log(this.noteList)

    // this.getAllNotes();
  }

  updatedData(value: any) {

    this.getAllNotes();
  }
  
  updatedIcon(iconEvent:any){
    this.getAllNotes();
  }

}
