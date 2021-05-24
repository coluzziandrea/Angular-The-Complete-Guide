import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
