import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingEnum } from '@app/./core/enums'
// Pages
import { NotFoundComponent } from '@app/features/not-found/not-found.component'
import { RootComponent } from '@app/features/root/root.component'

const routes: Routes = [
  {
    path: AppRoutingEnum.Root,
    redirectTo: AppRoutingEnum.Home,
    pathMatch: 'full'
  },
  {
    path: AppRoutingEnum.Home,
    component: RootComponent
    // loadChildren: () => import('@features/root').then(m => m.RootModule)
  },
  {
    path: AppRoutingEnum.About,
    // component: AboutComponent
    loadChildren: () => import('@app/features/about').then(m => m.AboutModule)
  },
  {
    path: AppRoutingEnum.Auth,
    loadChildren: () => import('@app/features/auth').then(m => m.AuthModule)
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
