import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A test Recipe 1', 'A Test 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTl1UdulPMtbyxdp-edAAWVhHV2z0_LqNvnLHE5Y3fTKvHC2W&s'),
        new Recipe('A test Recipe 2', 'A Test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTl1UdulPMtbyxdp-edAAWVhHV2z0_LqNvnLHE5Y3fTKvHC2W&s')
    ];

    constructor() { }

    ngOnInit() {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }

}
