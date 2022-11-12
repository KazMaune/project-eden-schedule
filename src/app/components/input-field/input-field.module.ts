import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field.component';


@NgModule({
    declarations: [
        InputFieldComponent
    ],
    exports: [
        InputFieldComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class InputFieldModule {
}
