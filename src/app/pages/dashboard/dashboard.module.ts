import { NgModule } from '@angular/core'
// Spaces
import { DashboardRouting } from './dashboard.routing'
import { DashboardComponent } from './dashboard.component'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRouting
  ]
})
export class DashboardModule {
}
