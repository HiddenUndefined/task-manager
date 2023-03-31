import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.sass']
})
export class HeaderComponent {
  navLinksCollection = [
    { path: '/home', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/auth/sign-in', name: 'Sign In' },
    { path: '/auth/sign-up', name: 'Sign Up' },
    { path: '/da89su', name: 'Not found' }
  ]
}
