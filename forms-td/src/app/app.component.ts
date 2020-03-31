import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    @ViewChild("f", { static: false }) singupForm: NgForm;
    defaultQuestion = "teacher";
    answer = "";
    genders = ["male", "female"];
    user = {
        username: "",
        email: "",
        secretQuestion: "pet",
        answer: "",
        gender: ""
    };
    submitted = false;

    suggestUserName() {
        const suggestedName = "Superuser";
        // this.singupForm.setValue({
        //     userData: {
        //         username: suggestedName,
        //         email: ""
        //     },
        //     secret: "pet",
        //     questionAnswer: "Nelly",
        //     gender: "male"
        // });
        this.singupForm.form.patchValue({
            userData: {
                username: "Superuser"
            }
        });
    }

    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    onSubmit() {
        this.submitted = true;
        this.user.username = this.singupForm.value.userData.username;
        this.user.email = this.singupForm.value.userData.email;
        this.user.secretQuestion = this.singupForm.value.secret;
        this.user.answer = this.singupForm.value.questionAnswer;
        this.user.gender = this.singupForm.value.gender;

        this.singupForm.reset();
    }
}
