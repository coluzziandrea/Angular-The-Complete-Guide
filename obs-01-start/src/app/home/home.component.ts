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

        if (count == 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error("count greater than 3"));
        }
        count++;
      }, 1000);
    });

    this.subs = customIntervalObservale.subscribe(
      (count) => {
        console.log(count);
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
