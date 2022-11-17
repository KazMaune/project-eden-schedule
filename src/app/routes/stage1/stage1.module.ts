import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stage1Component } from './stage1.component';
import { StageHeaderModule } from '../../components/stage-header/stage-header.module';
import { StageSetModule } from '../../components/stage-set/stage-set.module';
import { InputFieldModule } from '../../components/input-field/input-field.module';
import { StageSpecialsModule } from '../../components/stage-specials/stage-specials.module';
import { StageFloatsModule } from '../../components/stage-floats/stage-floats.module';
import { StageStaffModule } from '../../components/stage-staff/stage-staff.module';


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
        InputFieldModule,
        StageSpecialsModule,
        StageFloatsModule,
        StageStaffModule
    ]
})
export class Stage1Module {
}
