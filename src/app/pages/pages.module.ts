import { NgModule } from '@angular/core'
// Global
import { SharedModule } from '@shared'
import { WidgetsModule } from '@widgets'
// Spaces
import { HomeModule } from '@pages/home'
import { AboutModule } from '@pages/about'
import { AuthModule } from '@pages/auth'
import { NotFoundModule } from '@pages/not-found'

@NgModule({
  imports: [
    SharedModule,
    WidgetsModule
  ],
  exports: [
    HomeModule,
    AboutModule,
    AuthModule,
    NotFoundModule
  ]
})
export class PagesModule {
}
