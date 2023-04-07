import { NgModule } from '@angular/core'
// Spaces
import { HomeComponent } from './home.component'
import { HomeRouting } from './home.routing'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRouting
  ]
})
export class HomeModule {
}
