import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageFloatsComponent } from './stage-floats.component';
import { InputFieldModule } from '../input-field/input-field.module';


@NgModule({
    declarations: [
        StageFloatsComponent
    ],
    imports: [
        CommonModule,
        InputFieldModule
    ],
    exports: [
        StageFloatsComponent
    ]
})
export class StageFloatsModule {
}
