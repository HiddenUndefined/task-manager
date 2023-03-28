import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// Root
import { AppRouting } from '@app/app.routing'
import { AppComponent } from '@app/app.component'
// Shared
import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
