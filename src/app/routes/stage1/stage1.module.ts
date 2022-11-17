import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stage1Component } from './stage1.component';
import { StageHeaderModule } from '../../components/stage-header/stage-header.module';


@NgModule({
    declarations: [
        Stage1Component
    ],
    exports: [
        Stage1Component
    ],
    imports: [
        CommonModule,
        StageHeaderModule
    ]
})
export class Stage1Module {
}
