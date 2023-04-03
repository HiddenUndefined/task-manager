import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WidgetsModule } from '@widgets'
// Spaces
import { AboutComponent } from './about.component'
import { AboutRouting } from './about.routing'

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    AboutRouting
  ]
})
export class AboutModule {
}
