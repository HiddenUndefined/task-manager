import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RootComponent } from '@app/features/root/root.component'

const routes: Routes = [
  {
    path: '',
    component: RootComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRouting {
}
