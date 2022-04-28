import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  loginForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

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
    
            // stop here if form is invalid
            if (this.loginForm.invalid) {
                return;
            }
    
            // display form values on success
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
        }
    
        onReset() {
            this.submitted = false;
            this.loginForm.reset();
        }

}
