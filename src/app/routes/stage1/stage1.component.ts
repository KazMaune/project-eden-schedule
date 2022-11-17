import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'eden-stage1',
    templateUrl: './stage1.component.html',
    styleUrls: [ './stage1.component.scss' ]
})
export class Stage1Component implements OnInit {

    dancers1: string = '';
    dancers2: string = '';
    dancers3: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

}
