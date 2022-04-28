import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userServices/user.service';

// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  // ngOnInit(): void {
  // }

  registerForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private userService : UserService ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
            lastName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
            // userName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$#@?^*!~]).{8,}$")]],
            confirmPassword: ['', Validators.required],
        }
        // , {
        //     validator: MustMatch('password', 'confirmPassword')
        // }
        );
    }
        // convenience getter for easy access to form fields
        get f() { return this.registerForm.controls; }

        onSubmit() {
            this.submitted = true;
            console.log(this.registerForm.value, "reg success");
            // stop here if form is invalid
            if (this.registerForm.valid) {
                let reqData = {
                    firstName : this.registerForm.value.firstName,
                    lastName: this.registerForm.value.lastName,
                    email: this.registerForm.value.email,
                    password: this.registerForm.value.password
                  }
                  this.userService.registration(reqData).subscribe((response:any)=>{
                      console.log("Register successful", response);
                  });
            }
            
                
            // display form values on success
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        }
    
        onReset() {
            this.submitted = false;
            this.registerForm.reset();
        }

        
}
