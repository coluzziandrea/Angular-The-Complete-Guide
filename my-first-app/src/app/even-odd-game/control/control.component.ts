import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent implements OnInit {
  currentCounter: number;
  currentTimeout: any;

  constructor() {
    this.currentCounter = 0;
  }

  @Output('tick')
  tick = new EventEmitter<{
    counter: number;
  }>();

  @Output('stop')
  stop = new EventEmitter<any>();

  ngOnInit(): void {}

  emitTick() {
    this.currentCounter++;
    this.tick.emit({ counter: this.currentCounter });
  }

  startGame() {
    this.currentTimeout = setInterval(() => this.emitTick(), 1000);
  }

  stopGame() {
    clearInterval(this.currentTimeout);
    this.currentCounter = 0;
    this.currentTimeout = null;
    this.stop.emit();
  }
}
