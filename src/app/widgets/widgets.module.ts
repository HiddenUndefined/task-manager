import { NgModule } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { NgForOf } from '@angular/common'
// Features
import { FeaturesModule } from '@features'
// Components
import { HeaderComponent } from '@widgets/header/header.component'
import { FooterComponent } from '@widgets/footer/footer.component'

// Widgets registration
const widgets = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf,
    FeaturesModule
  ],
  declarations: widgets,
  exports: widgets
})
export class WidgetsModule {
}
