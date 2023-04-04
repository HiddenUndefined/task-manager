import { NgModule } from '@angular/core'
// Spaces
import { SignInComponent } from './sign-in.component'
import { SignInRouting } from './sign-in.routing'

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    SignInRouting
  ]
})
export class SignInModule {
}
