import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { InputFieldModule } from './components/input-field/input-field.module';
import { HomeModule } from './routes/home/home.module';
import { Stage1Module } from './routes/stage1/stage1.module';
import { Stage2Module } from './routes/stage2/stage2.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NavbarModule,
        InputFieldModule,
        HomeModule,
        Stage1Module,
        Stage2Module,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
