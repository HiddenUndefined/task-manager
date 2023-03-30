import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  constructor () {
  }

  ngOnInit () {
    console.log('Sign Up Component successfully rendered!')
  }
}
