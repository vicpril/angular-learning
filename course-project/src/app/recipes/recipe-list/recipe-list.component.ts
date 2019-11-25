import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A test Recipe', 'A Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTl1UdulPMtbyxdp-edAAWVhHV2z0_LqNvnLHE5Y3fTKvHC2W&s'),
        new Recipe('A test Recipe', 'A Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTl1UdulPMtbyxdp-edAAWVhHV2z0_LqNvnLHE5Y3fTKvHC2W&s')
    ];

    constructor() { }

    ngOnInit() {
    }

}
