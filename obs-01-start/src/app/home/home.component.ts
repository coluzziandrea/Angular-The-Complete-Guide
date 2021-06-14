import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  constructor() {}

  ngOnInit() {
    // this.subs = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservale = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.subs = customIntervalObservale.subscribe((count) => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
