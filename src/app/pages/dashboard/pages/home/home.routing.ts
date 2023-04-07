import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Spaces
import { HomeComponent } from './home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting {
}
