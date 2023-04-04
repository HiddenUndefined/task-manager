import { NgModule } from '@angular/core'
// Space
import { SignUpComponent } from './sign-up.component'
import { SignUpRouting } from './sign-up.routing'

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    SignUpRouting
  ]
})
export class SignUpModule {
}
