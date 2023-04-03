import { NgModule } from '@angular/core'
// Global
import { WidgetsModule } from '@widgets'
// Spaces
import { NotFoundComponent } from './not-found.component'

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    WidgetsModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule {
}
