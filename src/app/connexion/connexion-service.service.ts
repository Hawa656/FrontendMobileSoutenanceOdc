import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConnexionServiceService {
  // private formBuilder: FormBuilder;
  // private form!: FormGroup;
  constructor() {
    
  }


  // constructor(formBuilder: FormBuilder) {
  //   this.formBuilder=formBuilder;
  //   this.form=this.createForm();
   }

//   private createForm(): FormGroup{
//     let form= this.formBuilder.group({
//         name:['',[Validators.required]],
//         prenom:['',[Validators.required]],
//         password:['',[Validators.required,Validators.minLength(6)]],
//         numero:['',[Validators.required]],
//         email:['',[Validators.required,Validators.email]]
//     });
//     return form;
//    } 
//    getForm() :FormGroup{
//     return this.form;
//    }
// }
