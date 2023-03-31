import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Spaces
import { AuthRouterEnum } from './enums'
import { AuthComponent } from './auth.component'

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: AuthRouterEnum.SignIn,
        loadChildren: () => import('@app/pages/auth/pages/sign-in').then((m) => m.SignInModule)
      },
      {
        path: AuthRouterEnum.SignUp,
        loadChildren: () => import('@app/pages/auth/pages/sign-up').then((m) => m.SignUpModule)
      },
      {
        path: AuthRouterEnum.ForgotPassword,
        loadChildren: () => import('@app/pages/auth/pages/forgot-password').then((m) => m.ForgotPasswordModule)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: AuthRouterEnum.SignIn
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouting {
}
