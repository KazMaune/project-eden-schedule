import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'eden-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: [ './input-field.component.scss' ]
})
export class InputFieldComponent implements OnInit {

    @Input()
    id: string;

    @Input()
    name: string;

    @Input()
    classes: string;

    @Input()
    label: string;

    @Input()
    ngModel: string;

    @Output()
    ngModelChange = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    get classNames(): string {
        if (this.classes) {
            return `form-floating ${this.classes}`;
        } else {
            return 'form-floating';
        }
    }

}
