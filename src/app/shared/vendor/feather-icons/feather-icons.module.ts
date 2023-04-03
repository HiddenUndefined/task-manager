import { NgModule } from '@angular/core'
// Feather Icons
import { FeatherModule } from 'angular-feather'
// # Icons
import {
  Sun, Moon
} from 'angular-feather/icons'

// @IMPORTANT: Object
const icons = {
  Sun,
  Moon
}

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class FeatherIconsModule {
}
