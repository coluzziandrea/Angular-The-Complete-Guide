import { Component } from '@angular/core';
import { ServerElement } from './shared/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  serverElements: ServerElement[] = [
    new ServerElement('server', 'testServer', 'just a test'),
  ];
}
