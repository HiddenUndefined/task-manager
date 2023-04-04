import { NgModule } from '@angular/core'
// Space
import { HomeComponent } from './home.component'
import { HomeRouting } from './home.routing'
import { WidgetsModule } from '@widgets'

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
