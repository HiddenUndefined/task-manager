import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Space
import { SignUpComponent } from './sign-up.component'
import { SignUpRouting } from './sign-up.routing'

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRouting
  ]
})
export class SignUpModule {
}
