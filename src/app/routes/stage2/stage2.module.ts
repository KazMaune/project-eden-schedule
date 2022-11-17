import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stage2Component } from './stage2.component';
import { StageHeaderModule } from '../../components/stage-header/stage-header.module';
import { StageSetModule } from '../../components/stage-set/stage-set.module';
import { StageSpecialsModule } from '../../components/stage-specials/stage-specials.module';
import { StageFloatsModule } from '../../components/stage-floats/stage-floats.module';
import { StageStaffModule } from '../../components/stage-staff/stage-staff.module';


@NgModule({
    declarations: [
        Stage2Component
    ],
    exports: [
        Stage2Component
    ],
    imports: [
        CommonModule,
        StageHeaderModule,
        StageSetModule,
        StageSpecialsModule,
        StageFloatsModule,
        StageStaffModule
    ]
})
export class Stage2Module {
}
