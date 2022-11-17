import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'eden-stage2',
    templateUrl: './stage2.component.html',
    styleUrls: [ './stage2.component.scss' ]
})
export class Stage2Component implements OnInit {

    dancers1: string = '';
    dancers2: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

}
