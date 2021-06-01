import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-odd-game',
  templateUrl: './even-odd-game.component.html',
  styleUrls: ['./even-odd-game.component.css'],
})
export class EvenOddGameComponent implements OnInit {
  numbers: number[] = [];

  ngOnInit(): void {}

  onTick(event: any) {
    console.log(`Tick ${event.counter}`);
    this.numbers.push(event.counter);
  }

  onStop() {
    console.log('Stop.');
    this.numbers = [];
  }
}
