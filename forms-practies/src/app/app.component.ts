import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    projectForm: FormGroup;
    statuses = ["Stable", "Critical", "Finishes"];
    forbiddenProjects = ["Test"];

    ngOnInit() {
        this.projectForm = new FormGroup({
            project: new FormControl(
                null,
                [
                    Validators.required
                    // this.forbiddenProjectNames.bind(this)
                ],
                this.forbiddenProjectNamesPromise.bind(this)
            ),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            status: new FormControl("Stable")
        });
    }

    onSubmit() {
        console.log(this.projectForm);
        this.projectForm.reset({ status: "Stable" });
    }

    forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenProjects.indexOf(control.value) !== -1) {
            return { nameIsForbidden: true };
        }
        return null;
    }

    forbiddenProjectNamesPromise(
        control: FormControl
    ): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (this.forbiddenProjects.indexOf(control.value) !== -1) {
                    resolve({ nameIsForbidden: true });
                }
                resolve(null);
            }, 1500);
        });
        return promise;
    }
}
