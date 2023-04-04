import { NgModule } from '@angular/core'
// Spaces
import { AuthRouting } from './auth.routing'
import { AuthComponent } from './auth.component'

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    AuthRouting
  ]
})
export class AuthModule {
}
