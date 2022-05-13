import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  noteList : any=[]; 
  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
    this.getArchivelist();
  }

  getArchivelist(){
    this.notesService.getAllNotes().subscribe((response:any)=>{
      console.log("GetAll Archive Notes successful", response.data);
      this.noteList = response.data;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive === true && object.isTrash === false
      })
      // console.log(this.noteList);
    })
  }

  updatedIcon(iconEvent:any){
    this.getArchivelist();
  }

}
