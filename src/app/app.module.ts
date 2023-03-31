import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// Root
import { AppRouting } from '@app/app.routing'
import { AppComponent } from '@app/app.component'
// Shared
import { SharedModule } from '@shared'
// Layouts
import { LayoutsModule } from '@layouts'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    LayoutsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
