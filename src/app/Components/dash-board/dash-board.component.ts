import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  public sidenavText : boolean=true;

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

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
}
