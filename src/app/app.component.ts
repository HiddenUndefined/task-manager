import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ThemeService } from '@app/./core/services'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor (
    protected themeService: ThemeService
  ) {
  }

  ngOnInit () {
    this.themeService.initThemeBySystem()
  }
}
