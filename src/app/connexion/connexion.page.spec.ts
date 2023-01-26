import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConnexionPageModule } from './connexion.module';

import { ConnexionPage } from './connexion.page';





describe('ConnexionPage', () => {
  let component: ConnexionPage;
  let fixture: ComponentFixture<ConnexionPage>;
 
  beforeEach(waitForAsync(() => {
    

    TestBed.configureTestingModule({
      declarations: [ ConnexionPage ],
      imports: [IonicModule.forRoot(),ReactiveFormsModule,ConnexionPageModule]
    }).compileComponents();
    
     

    fixture = TestBed.createComponent(ConnexionPage);
    component = fixture.componentInstance;
     fixture.detectChanges();
  }));


    // it('should create register form on page init', ()=>{
    //   fixture.detectChanges();

    //   expect(component.registerForm).not.toBeUndefined();
    // })
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
