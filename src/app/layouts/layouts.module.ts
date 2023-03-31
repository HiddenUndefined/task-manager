import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Global
import { SharedModule } from '@app/shared'
// Spaces
import { AuthLayoutComponent } from './auth/auth.component'
import { WebsiteLayoutComponent } from './website/website.component'
import { NotFoundLayoutComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    WebsiteLayoutComponent,
    AuthLayoutComponent,
    NotFoundLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutsModule {
}
