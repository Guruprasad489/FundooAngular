import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { NotesService } from 'src/app/Services/notesServices/notes.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  public sidenavText : boolean=true;
  search:any;
  c:boolean=false;

  constructor(private router: Router, private _snackBar: MatSnackBar, private dataService: DataService) { }

  ngOnInit(): void {
  }

  signOut(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');

    this._snackBar.open('Sign out successful', '', {
      duration: 3000,
      verticalPosition: 'bottom',
      panelClass: ['snackbar-green']
    })
  }
 

  // sideNav(){
  //   this.sidenavText = !this.sidenavText
  // }

  searchNote(event:any){
    // console.log(event.target.value)
    this.c = true;
    this.search=event.target.value
    this.dataService.sendData(event.target.value)
  }

  searchClear(){
    this.search='';
    this.c= false;
  }
}
