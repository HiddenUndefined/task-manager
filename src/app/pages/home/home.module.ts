import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Space
import { HomeComponent } from './home.component'
import { HomeRouting } from './home.routing'
import { WidgetsModule } from '@widgets'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    WidgetsModule
  ]
})
export class HomeModule {
}
