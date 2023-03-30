import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { ThemeEnums } from '@core/services/theme/theme.enums'

/**
 * @TODO-Y Consider the possibility of implementing multi-themes.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isLightTheme = true

  constructor (
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  /**
   * Theme toggle method, revert isLightTheme
   * @public
   */
  public toggleTheme (): void {
    // Update theme status
    this.isLightTheme = !this.isLightTheme
    // Update theme class on the DOM body
    this.setThemeOnBody()
  }

  /**
   * Theme initialization by system theme
   * @public
   */
  public initThemeBySystem (): void {
    // Detect system theme is dark
    const systemThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // Set value to light theme status
    this.isLightTheme = !systemThemeIsDark
    // Set theme on body tag
    this.setThemeOnBody()
  }

  /**
   * Update theme class on the DOM body
   * @private
   */
  private setThemeOnBody (): void {
    // @TODO-Y Refactor this, need more flexible to change theme class
    if (this.isLightTheme) {
      this.document.body.classList.remove(ThemeEnums.dark)
    } else {
      this.document.body.classList.add(ThemeEnums.dark)
    }
  }
}
