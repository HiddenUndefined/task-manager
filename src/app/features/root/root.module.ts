import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Space
import { RootComponent } from './root.component'
import { RootRouting } from './root.routing'

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RootRouting
  ]
})
export class RootModule {
}
