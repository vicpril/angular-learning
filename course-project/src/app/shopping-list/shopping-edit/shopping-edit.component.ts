import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Component({
    selector: "app-shopping-edit",
    templateUrl: "./shopping-edit.component.html",
    styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild("f", { static: false }) slForm: NgForm;

    subscription: Subscription;
    editMode = false;
    editableItemIndex: number;
    editedItem: Ingredient;

    constructor(private slService: ShoppingListService) {}

    ngOnInit() {
        this.subscription = this.slService.startedEditing.subscribe(
            (index: number) => {
                this.editableItemIndex = index;
                this.editMode = true;
                this.editedItem = this.slService.getIngredient(index);
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                });
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(
                this.editableItemIndex,
                newIngredient
            );
        } else {
            this.slService.addIngredient(newIngredient);
        }
        // this.editMode = false;
        // form.reset();
        this.onClear();
    }

    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.slService.deleteIngredient(this.editableItemIndex);
        this.onClear();
    }
}
