import { Component } from '@angular/core';
import { ServerElement } from './shared/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push(
      new ServerElement(
        'server',
        serverData.serverName,
        serverData.serverContent
      )
    );
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push(
      new ServerElement(
        'blueprint',
        blueprintData.serverName,
        blueprintData.serverContent
      )
    );
  }
}
