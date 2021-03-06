import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userServices/user.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private userService : UserService, private _snackBar: MatSnackBar) { }

    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")]],
        });
    }
        // convenience getter for easy access to form fields
        get f() { return this.forgotPasswordForm.controls; }

        onSubmit() {
            this.submitted = true;
    
            if (this.forgotPasswordForm.valid) {
                let reqData = {
                    email: this.forgotPasswordForm.value.email,
                  }
                  this.userService.forgotPassword(reqData).subscribe((response:any)=>{
                      console.log("Reset link sent successfully", response);
                      
                      this._snackBar.open('Reset link sent successfully', '', {
                        duration: 3000,
                        verticalPosition: 'bottom'
                    })
                  });
            }
        }
    
        onReset() {
            this.submitted = false;
            this.forgotPasswordForm.reset();
        }

}
