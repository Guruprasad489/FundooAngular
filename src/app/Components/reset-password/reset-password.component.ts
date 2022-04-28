import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

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
  
          // stop here if form is invalid
          if (this.resetPasswordForm.invalid) {
              return;
          }
  
          // display form values on success
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetPasswordForm.value, null, 4));
      }
  
      onReset() {
          this.submitted = false;
          this.resetPasswordForm.reset();
      }

}
