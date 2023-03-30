import { TestBed } from '@angular/core/testing'
// Spaces
import { ThemeService } from '@core/services'
import { ThemeEnums, ThemeAttributeName } from './theme.enums'

describe('ThemeService', () => {
  const defaultValues = {
    isLightTheme: true
  }
  let service: ThemeService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ThemeService)
  })

  it('should be created', () => {
    // Service alive
    expect(service).toBeTruthy()
    // Is the default value correct
    expect(service.isLightTheme).toEqual(defaultValues.isLightTheme)
  })

  it('the boolean value of theme should be equal by the system\'s', () => {
    // #1 Get system value
    const systemIsLightTheme = !(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // #2 Init theme
    service.initThemeBySystem()
    // #3 Compare the value from the service with the system value
    expect(service.isLightTheme).toEqual(systemIsLightTheme)
  })

  it('theme boolean field value should be toggled', () => {
    // By client system theme
    // #1 Init theme
    service.initThemeBySystem()
    // #2 Memorize value
    const secondPointThemeValue = service.isLightTheme
    // #3 Toggle theme
    service.toggleTheme()
    // #4 Toggle theme
    expect(service.isLightTheme).toEqual(!secondPointThemeValue)
  })

  it('theme attr in the DOM body should be correct', () => {
    // By client system theme
    // #1 Init theme
    service.initThemeBySystem()
    // #2 (optional) Set dark theme
    if (service.isLightTheme) service.toggleTheme()
    // #3 Check body attr
    const bodyThemeAttribute = document.body.getAttribute(ThemeAttributeName)
    expect(bodyThemeAttribute).toContain(ThemeEnums.dark)
  })
})
