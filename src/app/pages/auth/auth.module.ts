import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Spaces
import { AuthRouting } from './auth.routing'
import { AuthComponent } from './auth.component'

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRouting
  ]
})
export class AuthModule {
}
