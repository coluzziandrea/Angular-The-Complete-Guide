import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";

import { map } from "rxjs/operators";
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
    let customIntervalObservale = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count == 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error("count greater than 3"));
        }
        count++;
      }, 1000);
    });

    // applies operators to observable
    customIntervalObservale = customIntervalObservale.pipe(
      map((data: number) => {
        return data + 1;
      })
    );

    this.subs = customIntervalObservale.subscribe(
      (count: number) => {
        // console.log("Round: " + (count + 1));
        console.log("Round: " + count);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("Completed");
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
