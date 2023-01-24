import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationOTPPage } from './verification-otp.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationOTPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationOTPPageRoutingModule {}
