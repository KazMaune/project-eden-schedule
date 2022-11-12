import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { InputFieldModule } from './components/input-field/input-field.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NavbarModule,
        InputFieldModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
