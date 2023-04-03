import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.sass']
})
export class PresentComponent {
  @Input() title = ''

  @Input() description = ''

  @Input() buttonFunction: () => void = () => {}

  @Input() buttonTitle = ''
}
