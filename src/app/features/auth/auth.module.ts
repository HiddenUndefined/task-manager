import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthRouting } from './auth.routing'
import { AuthComponent } from '@app/features/auth/auth.component'

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
