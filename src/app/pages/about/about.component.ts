import { Component } from '@angular/core'

@Component({
  selector: 'app-about-page',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.sass']
})
export class AboutComponent {
  public clickTest () {
    alert('It\'s alert from AboutComponent')
  }
}
