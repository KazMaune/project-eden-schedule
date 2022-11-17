import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stage2Component } from './stage2.component';
import { StageHeaderModule } from '../../components/stage-header/stage-header.module';


@NgModule({
    declarations: [
        Stage2Component
    ],
    exports: [
        Stage2Component
    ],
    imports: [
        CommonModule,
        StageHeaderModule
    ]
})
export class Stage2Module {
}
