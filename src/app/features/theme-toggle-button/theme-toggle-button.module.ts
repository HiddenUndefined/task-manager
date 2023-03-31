import { NgModule } from '@angular/core'
// Spaces
import { ThemeToggleButtonComponent } from './theme-toggle-button.component'
import { FeatherIconsModule } from '@shared/vendor/feather-icons/feather-icons.module'

@NgModule({
  declarations: [
    ThemeToggleButtonComponent
  ],
  imports: [
    FeatherIconsModule
  ],
  exports: [
    ThemeToggleButtonComponent
  ]
})
export class ThemeToggleButtonModule {
}
