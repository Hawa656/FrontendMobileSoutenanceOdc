import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-connexion1',
  templateUrl: './connexion1.page.html',
  styleUrls: ['./connexion1.page.scss'],
})
export class Connexion1Page implements OnInit {
  
//  ============================================
// ====================REGISTER CREATION COMPTE
  form: any = {
    numeroOrEmail: null,
    password: null,
    nom:null,
    prenom:null,
    numero:null,
    email:null,
    confirmpassword:null
   
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];


  constructor(private authService: AuthService, private storageService: StorageService, private route : Router) { }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;

      //RECUPERATION DU ROLE DE L'UTILISATEUR CONNECTE
      this.roles = this.storageService.getUser().roles;
    }
  }

  //METHODE PERMETTANT DE S'INSCRIRE 
  onSubmit(): void {
    const { nom,prenom,numero, email, password, confirmpassword } = this.form;

    this.authService.register(nom,prenom,numero, email, password, confirmpassword).subscribe({
      next: data => {
        console.log(data);
        
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  //METHODE PERMETTANT DE SE CONNECTER 
  Connexion(): void {
    const { numeroOrEmail,password} = this.form;

    this.authService.login(numeroOrEmail, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log(this.roles[0]);
        if(this.roles[0]=="ROLE_USER"){
          this.route.navigate(['/tabs/accueil'])
        }
        
        // this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }



  //  ============================================
// ====================LOGIN SE CONNECTER

}
