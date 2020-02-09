import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput', { static: false }) inputNameRef: ElementRef;
    @ViewChild('amountInput', { static: false }) inputAmountRef: ElementRef;


    constructor(private slService: ShoppingListService) { }

    ngOnInit() {
    }

    onAddItem() {
        const ingName = this.inputNameRef.nativeElement.value;
        const ingAmount = this.inputAmountRef.nativeElement.value;
        this.slService.addIngredient(new Ingredient(ingName, ingAmount));
    }

}
