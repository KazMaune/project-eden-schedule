import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageSetComponent } from './stage-set.component';
import { InputFieldModule } from '../input-field/input-field.module';


@NgModule({
    declarations: [
        StageSetComponent
    ],
    imports: [
        CommonModule,
        InputFieldModule
    ],
    exports: [
        StageSetComponent
    ]
})
export class StageSetModule {
}
