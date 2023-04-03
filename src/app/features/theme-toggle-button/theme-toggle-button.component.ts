import { Component } from '@angular/core'
import { ThemeService } from '@core/services'

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: 'theme-toggle-button.component.html',
  styleUrls: ['theme-toggle-button.component.sass']
})
export class ThemeToggleButtonComponent {
  constructor (
    protected themeService: ThemeService
  ) {
  }
}
