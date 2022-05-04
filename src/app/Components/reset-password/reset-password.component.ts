import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;
  hide : boolean = true;
  token : any;

  constructor(private formBuilder: FormBuilder, private userService : UserService, private _snackBar: MatSnackBar, 
    private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
      this.resetPasswordForm = this.formBuilder.group({
          password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$#@?^*!~]).{8,}$")]],
          confirmPassword: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$#@?^*!~]).{8,}$")]]
      });
      this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
      // convenience getter for easy access to form fields
      get f() { return this.resetPasswordForm.controls; }

      onSubmit() {
          this.submitted = true;
  
          if (this.resetPasswordForm.valid) {
            let reqData = {
              newPassword: this.resetPasswordForm.value.password,
              confirmPassword: this.resetPasswordForm.value.confirmPassword
              }
              this.userService.resetPassword(reqData,this.token).subscribe((response:any)=>{
                  console.log("Password changed successfully", response);
                  // this.router.navigateByUrl('/login')

                  this._snackBar.open('Congratulations! Password changed successfully' , '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center'
                })
              });
          }
  
      }
  
      onReset() {
          this.submitted = false;
          this.resetPasswordForm.reset();
      }
      ShowPassword(){
        this.hide = !this.hide;            
    }
}
