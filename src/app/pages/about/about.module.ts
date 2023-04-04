import { NgModule } from '@angular/core'
import { WidgetsModule } from '@widgets'
// Spaces
import { AboutComponent } from './about.component'
import { AboutRouting } from './about.routing'

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    WidgetsModule,
    AboutRouting
  ]
})
export class AboutModule {
}
