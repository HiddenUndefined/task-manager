import { NgModule } from '@angular/core'
// Globals
import { SharedModule } from '@shared'
// Spaces
import { ThemeToggleButtonComponent } from './theme-toggle-button.component'

@NgModule({
  declarations: [
    ThemeToggleButtonComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ThemeToggleButtonComponent
  ]
})
export class ThemeToggleButtonModule {
}
