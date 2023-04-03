import { NgModule } from '@angular/core'
// UI
import { UiModule } from '@shared/ui'
// Vendors
import { FeatherIconsModule } from '@shared/vendor/feather-icons/feather-icons.module'

@NgModule({
  imports: [
    UiModule,
    FeatherIconsModule
  ],
  exports: [
    UiModule,
    FeatherIconsModule
  ]
})
export class SharedModule {
}
