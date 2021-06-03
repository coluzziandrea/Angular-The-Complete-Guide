import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-market';

  loadedFeature: string = 'recipe';

  onFeatureSelected(event: string) {
    this.loadedFeature = event;
  }
}
