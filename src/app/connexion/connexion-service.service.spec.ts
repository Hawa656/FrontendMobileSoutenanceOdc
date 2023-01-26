import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ConnexionServiceService } from './connexion-service.service';

describe('ConnexionServiceService', () => {
  let service: ConnexionServiceService;
  // let registerPageForm: ConnexionServiceService;
  // let form: FormGroup;

  beforeEach(() => {
    // registerPageForm= new ConnexionServiceService(new FormBuilder());
    // form= registerPageForm.getForm(); 


    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionServiceService);
  });

  // it('Le nom est obligatoire', ()=>{
  //   expect(form.get('name')?.valid).toBeFalsy();
  // })

  // it('Le prenom est obligatoire', ()=>{
  //   expect(form.get('prenom')?.valid).toBeFalsy();
  // })

  // it('Le mot de passe doit avoir au moins 6 caractere', ()=>{
  //   form.get('password')?.setValue('12345');
  //   expect(form.get('password')?.valid).toBeFalsy();
  // })
  
  // it('email est obligatoire', ()=>{
  //   form.get('email')?.setValue('emailInvalid');
  //   expect(form.get('email')?.valid).toBeFalsy();
  // })
  
  // it('Le numero est obligatoire', ()=>{
  //   expect(form.get('numero')?.valid).toBeFalsy();
  // })



  // it('Le formulaire est valide', ()=>{
  //   form.get('name')?.setValue('anyName');
  //   form.get('prenom')?.setValue('anyPrenom');
  //   form.get('email')?.setValue('any@email.com');
  //   form.get('numero')?.setValue('anyNumero');
  //   form.get('password')?.setValue('anyPassword');


  //   expect(form.valid).toBeTruthy();
  // })

  // it('should create', () => {
  //   expect(Component).toBeTruthy();
  // });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
