import { NgModule } from '@angular/core'
// Spaces
import { ForgotPasswordComponent } from './forgot-password.component'
import { ForgotPasswordRouting } from './forgot-password.routing'

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    ForgotPasswordRouting
  ]
})
export class ForgotPasswordModule {
}
