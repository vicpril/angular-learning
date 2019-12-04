import { Directive, HostListener, HostBinding, ViewChild, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    // @HostBinding('class.show') isOpen: boolean = false;
    isOpen: boolean = false;

    @HostListener('document:click', ['$event']) toggleOpen() {
        this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;
        (this.isOpen) ?
            this.el.nativeElement.querySelector('.dropdown-menu').classList.add('show') :
            this.el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
    }

    constructor(private el: ElementRef) { }
}