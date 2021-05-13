import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  showSecret: boolean = false;
  logs: number[] = [];
  logCounter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.logCounter++;
    this.logs.push(this.logCounter);
  }
}
