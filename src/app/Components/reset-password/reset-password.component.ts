import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userServices/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService : UserService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
      this.resetPasswordForm = this.formBuilder.group({
          password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$#@?^*!~]).{8,}$")]],
          confirmPassword: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$#@?^*!~]).{8,}$")]]
      });
  }
      // convenience getter for easy access to form fields
      get f() { return this.resetPasswordForm.controls; }

      onSubmit() {
          this.submitted = true;
  
          if (this.resetPasswordForm.valid) {
            let reqData = {
                password: this.resetPasswordForm.value.password,
                confirmPassword: this.resetPasswordForm.value.confirmPassword
              }
              this.userService.resetPassword(reqData).subscribe((response:any)=>{
                  console.log("Password changed successfully", response);
                  this._snackBar.open('Password changed successfully', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center'
                })
              });
          }
  
          // display form values on success
        //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetPasswordForm.value, null, 4));
      }
  
      onReset() {
          this.submitted = false;
          this.resetPasswordForm.reset();
      }

}
