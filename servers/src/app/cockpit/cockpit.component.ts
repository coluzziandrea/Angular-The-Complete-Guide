import { Component, OnInit } from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {
  newServerName: string = '';
  newServerContent: string = '';
  serverElements: ServerElement[] = [];

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverElements.push(
      new ServerElement('server', this.newServerName, this.newServerContent)
    );
  }

  onAddBlueprint() {
    this.serverElements.push(
      new ServerElement('blueprint', this.newServerName, this.newServerContent)
    );
  }
}
