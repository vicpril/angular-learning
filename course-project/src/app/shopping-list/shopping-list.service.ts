import { Subject } from "rxjs";
import { EventEmitter } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingrediantsChanges = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10),
        new Ingredient("Potatues", 8)
    ];

    constructor() {}

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingrediantsChanges.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient)
        // }

        this.ingredients.push(...ingredients);
        this.ingrediantsChanges.next(this.ingredients.slice());
    }
}
