import { Component, Input, OnInit } from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent implements OnInit {
  // alternative to creating the class:
  // element: { type: string; name: string; content: string };
  // alternative to creating the class:
  // element: { type: string; name: string; content: string };
  @Input('srvElement')
  element!: ServerElement;

  constructor() {}

  ngOnInit(): void {}
}
