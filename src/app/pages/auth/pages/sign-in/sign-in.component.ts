import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-auth-sign-in-page',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  ngOnInit () {
    console.log('Sign In Component successfully rendered!')
  }
}
