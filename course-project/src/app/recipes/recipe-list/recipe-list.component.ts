import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.module";
import { RecipeService } from "../recipe.service";

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(
        private recipeServise: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.recipes = this.recipeServise.getRecipes();
    }

    onNewRecipe() {
        this.router.navigate(["new"], { relativeTo: this.route });
    }
}
