import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.module";
import { RecipeService } from "../recipe.service";

@Component({
    selector: "app-recipe-detail",
    templateUrl: "./recipe-detail.component.html",
    styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params["id"];
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShopppingList(
            this.recipe.ingredients
        );
    }

    onEditRecipe() {
        // this.router.navigate(["/recipes", this.id, "edit"], {
        this.router.navigate(["edit"], {
            relativeTo: this.route
        });
    }
}
