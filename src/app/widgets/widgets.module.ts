import { NgModule } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
// Shared
import { SharedModule } from '@shared'
// Features
import { FeaturesModule } from '@features'
// Components
import { HeaderComponent } from '@widgets/header/header.component'
import { FooterComponent } from '@widgets/footer/footer.component'
import { PresentComponent } from '@widgets/present/present.component'
// Sub-widgets
import { NotFoundWidgetsModule } from '@widgets/not-found'

// Widgets registration
const widgets = [
  HeaderComponent,
  FooterComponent,
  PresentComponent
]

@NgModule({
  imports: [
    RouterLink,
    RouterLinkActive,
    SharedModule,
    FeaturesModule,
    NotFoundWidgetsModule
  ],
  declarations: widgets,
  exports: [
    widgets,
    NotFoundWidgetsModule
  ]
})
export class WidgetsModule {
}
