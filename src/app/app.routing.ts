import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingEnum } from '@core/enums'
// Pages
import { NotFoundComponent } from '@pages/not-found/not-found.component'
// Layouts
import { WebsiteLayoutComponent } from '@layouts/website'
import { AuthLayoutComponent } from '@layouts/auth'
import { NotFoundLayoutComponent } from '@layouts/not-found'
import { DashboardLayoutComponent } from '@layouts/dashboard'

const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: AppRoutingEnum.Home,
        pathMatch: 'full'
      },
      {
        path: AppRoutingEnum.Home,
        loadChildren: () => import('@pages/home').then(m => m.HomeModule)
      },
      {
        path: AppRoutingEnum.About,
        // loadChildren: () => import('@pages/about').then(m => m.AboutModule)
        loadChildren: () => import('@pages/about/about.routing').then(c => c.AboutRouting)
      }
    ]
  },
  {
    path: AppRoutingEnum.Auth,
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/auth').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: AppRoutingEnum.Dashboard,
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/dashboard').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundLayoutComponent,
    children: [
      {
        path: '',
        component: NotFoundComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
