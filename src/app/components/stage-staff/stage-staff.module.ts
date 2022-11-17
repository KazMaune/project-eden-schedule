import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageStaffComponent } from './stage-staff.component';
import { InputFieldModule } from '../input-field/input-field.module';


@NgModule({
    declarations: [
        StageStaffComponent
    ],
    imports: [
        CommonModule,
        InputFieldModule
    ],
    exports: [
        StageStaffComponent
    ]
})
export class StageStaffModule {
}
