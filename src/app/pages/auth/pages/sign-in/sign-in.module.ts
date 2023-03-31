import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Spaces
import { SignInComponent } from './sign-in.component'
import { SignInRouting } from './sign-in.routing'

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRouting
  ]
})
export class SignInModule {
}
