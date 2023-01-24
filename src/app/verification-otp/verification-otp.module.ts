import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationOTPPageRoutingModule } from './verification-otp-routing.module';

import { VerificationOTPPage } from './verification-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationOTPPageRoutingModule
  ],
  declarations: [VerificationOTPPage]
})
export class VerificationOTPPageModule {}
