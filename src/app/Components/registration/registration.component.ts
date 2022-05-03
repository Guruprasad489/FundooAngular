import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userServices/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

// import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
    submitted = false;
    hide : boolean = true;

    constructor(private formBuilder: FormBuilder, private userService : UserService, private _snackBar: MatSnackBar ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
            lastName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
            // userName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")]],
            password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$#@?^*!~]).{8,}$")]],
            confirmPassword: ['', Validators.required]
        },
        // , {
        //     validator: ConfirmedValidator('password', 'confirmPassword')
        // }
        );
    }
        // convenience getter for easy access to form fields
        get f() { return this.registerForm.controls; }

        onSubmit() {
            this.submitted = true;

            if (this.registerForm.valid) {
                let reqData = {
                    firstName : this.registerForm.value.firstName,
                    lastName: this.registerForm.value.lastName,
                    email: this.registerForm.value.email,
                    password: this.registerForm.value.password
                  }
                  this.userService.registration(reqData).subscribe((response:any)=>{
                      console.log("Register successful", response);
                      this._snackBar.open('User registered successfully', '', {
                          duration: 3000,
                          verticalPosition: 'bottom'
                      })
                  });

            }
        }
    
        onReset() {
            this.submitted = false;
            this.registerForm.reset();
        }
        openSnackBar() {
            this._snackBar.openFromComponent(MatSnackBar, {
              duration: 2000,
            });
        }
        ShowPassword(){
            this.hide = !this.hide;            
        }
}

// export function ConfirmedValidator(controlName: string, matchingControlName: string){
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];
//         if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//             return;
//         }
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ confirmedValidator: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }
