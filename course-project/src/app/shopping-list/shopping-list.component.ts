import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private igChangeSub: Subscription;

    constructor(private slService: ShoppingListService) {}

    ngOnInit() {
        this.ingredients = this.slService.getIngredients();
        this.igChangeSub = this.slService.ingrediantsChanges.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    ngOnDestroy() {
        this.igChangeSub.unsubscribe();
    }
}
