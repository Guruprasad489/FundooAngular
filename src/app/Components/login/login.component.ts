import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    submitted = false;
    hide : boolean = true;

    constructor(private formBuilder: FormBuilder, private userService : UserService, private _snackBar: MatSnackBar, private router:Router ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")]],
            password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$#@?^*!~]).{8,}$")]]
        });
    }
        // convenience getter for easy access to form fields
        get f() { return this.loginForm.controls; }

        onSubmit() {
            this.submitted = true;
            // console.log(this.loginForm.value, "login success");

            if (this.loginForm.valid) {
                let reqData = {
                    email: this.loginForm.value.email,
                    password: this.loginForm.value.password
                  }
                  this.userService.login(reqData).subscribe((response:any)=>{
                      console.log("Login successful", response);
                      localStorage.setItem("token",response.token);
                      this.router.navigateByUrl('/home/notes')

                      this._snackBar.open('Logged in successfully', '', {
                        duration: 3000,
                        verticalPosition: 'bottom',
                        horizontalPosition: 'center',
                        panelClass: ['snackbar-green']
                    })
                  });
            }
    
        }
    
        onReset() {
            this.submitted = false;
            this.loginForm.reset();
        }
        ShowPassword(){
          this.hide = !this.hide;            
      }
}
