import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingEnum } from '@core/enums'
// Pages
import { NotFoundComponent } from '@pages/not-found/not-found.component'
import { HomeComponent } from '@pages/home/home.component'

const routes: Routes = [
  {
    path: AppRoutingEnum.Root,
    redirectTo: AppRoutingEnum.Home,
    pathMatch: 'full'
  },
  {
    path: AppRoutingEnum.Home,
    component: HomeComponent
    // loadChildren: () => import('@pages/root').then(m => m.RootModule)
  },
  {
    path: AppRoutingEnum.About,
    // component: AboutComponent
    loadChildren: () => import('@pages/about').then(m => m.AboutModule)
  },
  {
    path: AppRoutingEnum.Auth,
    loadChildren: () => import('@pages/auth').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
