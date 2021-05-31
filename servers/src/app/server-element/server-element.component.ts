import { Content } from '@angular/compiler/src/render3/r3_ast';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // alternative to creating the class:
  // element: { type: string; name: string; content: string };
  // alternative to creating the class:
  // element: { type: string; name: string; content: string };
  @Input('srvElement')
  element!: ServerElement;

  @Input()
  name!: string;

  @ViewChild('serverHeading', { static: true }) header!: ElementRef;

  @ContentChild('contentParagraph', { static: true })
  paragraph!: ElementRef;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log(
      'Header content (ngAfterViewInit): ' +
        this.header.nativeElement.textContent
    );
    console.log(
      'ngAfterViewInit text content of paragraph: ' +
        this.paragraph.nativeElement.textContent
    );
  }

  constructor() {
    console.log('constructor called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');

    console.log(
      'Header content (ngOnInit): ' + this.header.nativeElement.textContent
    );

    console.log(
      'ngOnInit text content of paragraph: ' +
        this.paragraph.nativeElement.textContent
    );
  }
}
