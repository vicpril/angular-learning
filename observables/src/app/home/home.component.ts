import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable, observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
    private firstObsSubscriptions: Subscription;

    constructor() {}

    ngOnInit() {
        // this.firstObsSubscriptions = interval(1000).subscribe(count => {
        //     console.log(count);
        // });
        const customIntervalObservable = Observable.create(observer => {
            let count = 0;
            setInterval(() => {
                observer.next(count);
                if (count === 5) {
                    observer.complete();
                }
                if (count > 3) {
                    observer.error(new Error("Count is greater 3!"));
                }
                count++;
            }, 1000);
        });

        //operators

        this.firstObsSubscriptions = customIntervalObservable
            .pipe(
                filter(data => {
                    return data > 0;
                }),
                map((data: number) => {
                    return "Round: " + (data + 1);
                })
            )
            .subscribe(
                data => {
                    console.log(data);
                },
                error => {
                    console.log(
                        "TCL: HomeComponent -> ngOnInit -> error",
                        error
                    );
                },
                //complete reaction
                () => {
                    console.log("Completeed!");
                }
            );
    }

    ngOnDestroy() {
        this.firstObsSubscriptions.unsubscribe();
    }
}
