import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingEnum } from '@core/enums'
// Pages
import { NotFoundComponent } from '@pages/not-found/not-found.component'
import { WebsiteLayoutComponent } from '@app/layouts/website/website.component'
import { AuthLayoutComponent } from '@app/layouts/auth/auth.component'
import { NotFoundLayoutComponent } from '@layouts/not-found/not-found.component'

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
