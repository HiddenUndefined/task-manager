import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Spaces
import { DashboardComponent } from './dashboard.component'
import { DashboardRouterEnum } from './enums'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: DashboardRouterEnum.Home,
        loadChildren: () => import('@app/pages/dashboard/pages/home').then((m) => m.HomeModule)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: DashboardRouterEnum.Home
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting {
}
