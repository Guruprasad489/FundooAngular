import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TakeNoteComponent } from './Components/take-note/take-note.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password/:token',component:ResetPasswordComponent},
  {path: 'home', component: DashBoardComponent, canActivate:[AuthenticationGuard],
    children:[
      {path:'', redirectTo:'/home/notes', pathMatch:'full' },
      {path: 'notes', component: GetAllNotesComponent}
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
