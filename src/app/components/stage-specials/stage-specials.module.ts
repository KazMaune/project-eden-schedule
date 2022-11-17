import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageSpecialsComponent } from './stage-specials.component';
import { InputFieldModule } from '../input-field/input-field.module';


@NgModule({
    declarations: [
        StageSpecialsComponent
    ],
    imports: [
        CommonModule,
        InputFieldModule
    ],
    exports: [
        StageSpecialsComponent
    ]
})
export class StageSpecialsModule {
}
