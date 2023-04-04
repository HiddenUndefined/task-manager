import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Directives
import { DirectivesModule } from '@shared/directives'
// Pipes
import { PipeModule } from '@shared/pipes'
// UI
import { UiModule } from '@shared/ui'
// Vendors
import { VendorModule } from '@shared/vendor'

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipeModule,
    UiModule,
    VendorModule
  ],
  exports: [
    CommonModule,
    DirectivesModule,
    PipeModule,
    UiModule,
    VendorModule
  ]
})
export class SharedModule {
}
