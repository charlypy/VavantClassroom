import {AfterViewInit, Component} from '@angular/core';
import {TabIndex} from './models/tabIndex.enum';
import {BehaviorSubject, Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public TabIndex = TabIndex;
  public currentTabIndex: BehaviorSubject<number> = new BehaviorSubject<number>(TabIndex.citySlector);

  constructor() {
  }

  public goTo(tabIndex: TabIndex) {
    this.currentTabIndex.next(tabIndex);
  }


}
