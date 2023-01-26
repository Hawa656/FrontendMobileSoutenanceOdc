import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../providers/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  isModalOpen = false;
// ==================LOGIN=======================
  // form: any = {
  //   numeroOrEmail: null,
  //   password: null
  // };
  // isSuccessful = false;
  // isSignUpFailed = false;
  // errorMessage = '';
// ==================Inscriptipon=======================
// form1: any = {
//   nom: null,
//   prenom: null,
//   numero:null,
//   email:null,
//   password:null,
//   confirmNotification:null

// };





  // registerForm!: ConnexionPage;
  

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  // constructor(private formBuilder:FormBuilder) {
    
  //  }
  constructor(private authService: AuthService) {
    
  }

  

  ngOnInit() {
    // this.createForm();
  }

  // onSubmit(): void {
  //   const { nom,prenom,numero, email, password } = this.form;

  //   this.authService.register(nom,prenom,numero, email, password).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   });
  // }

  // private createForm(){
  //   this.registerForm= new ConnexionPage(this.formBuilder);
  // }

}
