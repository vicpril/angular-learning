import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../recipe.module";
import { RecipeService } from "../recipe.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];
    subscription: Subscription;

    constructor(
        private recipeServise: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.subscription = this.recipeServise.recipesChange.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        );
        this.recipes = this.recipeServise.getRecipes();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onNewRecipe() {
        this.router.navigate(["new"], { relativeTo: this.route });
    }
}
