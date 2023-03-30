import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isLightTheme = true

  constructor (
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  public toggleTheme (): void {
    this.isLightTheme = !this.isLightTheme
    this.setThemeOnBody()
  }

  public initThemeBySystem (): void {
    // Detect system theme is dark
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // Set value to light theme status
    this.isLightTheme = !isDark
    // Set theme on body tag
    this.setThemeOnBody()
  }

  private setThemeOnBody (): void {
    if (this.isLightTheme) {
      this.document.body.classList.remove('dark-theme')
    }
    else {
      this.document.body.classList.add('dark-theme')
    }
  }
}
