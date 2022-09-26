import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator, passwordValidator } from '../shared/customValidator.validator'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })

  submitForm(){
    console.warn(this.registrationForm.value)
  }
  constructor(private fb: FormBuilder) { }
  
  registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5), forbiddenNameValidator(/admin/)]],
    lastName: ['', [Validators.required, Validators.minLength(7)]],
    email: ['', [Validators.required, Validators.minLength(7)]],
    password: ['', [Validators.required, Validators.minLength(7)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(7)]]
  }, {
    validator: passwordValidator
  })
  get lastName(){
    return this.registrationForm.get('lastName')
  }
  ngOnInit(): void {
  }

}
