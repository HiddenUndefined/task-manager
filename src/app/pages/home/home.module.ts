import { NgModule } from '@angular/core'
// Widgets
import { WidgetsModule } from '@widgets'
// Space
import { HomeComponent } from './home.component'
import { HomeRouting } from './home.routing'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRouting,
    WidgetsModule
  ]
})
export class HomeModule {
}
