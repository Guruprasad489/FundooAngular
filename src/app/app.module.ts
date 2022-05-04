import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';


import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { TakeNoteComponent } from './Components/take-note/take-note.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PageNotFoundComponent,
    DashBoardComponent,
    TakeNoteComponent,
    DisplayNoteComponent,
    GetAllNotesComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
