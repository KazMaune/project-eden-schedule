import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stage1Component } from './stage1.component';
import { StageHeaderModule } from '../../components/stage-header/stage-header.module';
import { StageSetModule } from '../../components/stage-set/stage-set.module';
import { InputFieldModule } from '../../components/input-field/input-field.module';


@NgModule({
    declarations: [
        Stage1Component
    ],
    exports: [
        Stage1Component
    ],
    imports: [
        CommonModule,
        StageHeaderModule,
        StageSetModule,
        InputFieldModule
    ]
})
export class Stage1Module {
}
