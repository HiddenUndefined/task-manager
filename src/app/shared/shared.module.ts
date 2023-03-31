import { NgModule } from '@angular/core'
import {
  HeaderComponent,
  FooterComponent
} from '@app/shared/components'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { NgForOf } from '@angular/common'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
