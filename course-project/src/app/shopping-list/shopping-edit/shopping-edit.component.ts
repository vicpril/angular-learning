import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput', { static: false }) inputNameRef: ElementRef;
    @ViewChild('amountInput', { static: false }) inputAmountRef: ElementRef;

    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    constructor() { }

    ngOnInit() {
    }

    onAddItem() {
        const ingName = this.inputNameRef.nativeElement.value;
        const ingAmount = this.inputAmountRef.nativeElement.value;
        this.ingredientAdded.emit(new Ingredient(ingName, ingAmount));
    }

}
