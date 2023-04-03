import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Spaces
import { ForgotPasswordComponent } from './forgot-password.component'
import { ForgotPasswordRouting } from './forgot-password.routing'

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRouting
  ]
})
export class ForgotPasswordModule {
}
