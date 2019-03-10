import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {routeStateTrigger} from './routingAnimations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeStateTrigger
  ]
})
export class AppComponent {
  title = 'AngularMaterialStyling';

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }

}
