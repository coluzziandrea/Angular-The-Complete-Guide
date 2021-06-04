import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CounterService {
  inactiveToActive: number = 0;
  activeToInactive: number = 0;

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log(`Inactive to active: ${this.inactiveToActive}`);
  }
  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log(`Active to inactive: ${this.activeToInactive}`);
  }
}
