import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Global
import { SharedModule } from '@shared'
import { WidgetsModule } from '@widgets'
// Spaces
import { AuthLayoutComponent } from './auth'
import { WebsiteLayoutComponent } from './website'
import { NotFoundLayoutComponent } from './not-found'

@NgModule({
  declarations: [
    WebsiteLayoutComponent,
    AuthLayoutComponent,
    NotFoundLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    WidgetsModule
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutsModule {
}
