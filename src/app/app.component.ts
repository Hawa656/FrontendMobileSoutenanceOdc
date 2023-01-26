import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // registerForm!:FormGroup
  // title!: 'formValidation';
  // submitted =  false;
  constructor(private formBuilder:FormBuilder) {}
  // ngOnInit(){
  //   //VALIDATIONS
  //   this.registerForm  = this.formBuilder.group({
  //     firstName:['',Validators.required]
  //   })
  // }
}
