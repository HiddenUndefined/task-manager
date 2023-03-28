import { NgModule } from '@angular/core'
import {
  HeaderComponent,
  FooterComponent
} from '@shared/components'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
