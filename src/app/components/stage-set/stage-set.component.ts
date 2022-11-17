import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'eden-stage-set',
    templateUrl: './stage-set.component.html',
    styleUrls: [ './stage-set.component.scss' ]
})
export class StageSetComponent implements OnInit {

    @Input()
    stagePositionName: string;

    @Input()
    set1Id: string;

    @Input()
    set2Id: string;

    @Input()
    set3Id: string;

    @Input()
    set1: string;

    @Input()
    set2: string;

    @Input()
    set3: string;

    @Output()
    set1Change = new EventEmitter();

    @Output()
    set2Change = new EventEmitter();

    @Output()
    set3Change = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

}
