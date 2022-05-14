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
  profileName:any;
  profileEmail:any;

  constructor(private router: Router, private _snackBar: MatSnackBar, private dataService: DataService) { 
    this.profileName = localStorage.getItem('name');
    this.profileEmail = localStorage.getItem('email');
  }

  ngOnInit(): void {
  }

  reload(){
    window.location.reload()
  }

  signOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    this.router.navigateByUrl('/login');
    // window.location.reload()

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
