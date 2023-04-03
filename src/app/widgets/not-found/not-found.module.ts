import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
// Spaces
import { OopsComponent } from './oops/oops.component'

// Components
const components = [
  OopsComponent
]

@NgModule({
  declarations: components,
  imports: [
    RouterModule
  ],
  exports: components
})
export class NotFoundWidgetsModule {
}
