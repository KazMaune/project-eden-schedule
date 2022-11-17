import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Stage1Component } from './routes/stage1/stage1.component';
import { Stage2Component } from './routes/stage2/stage2.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
    {
        path: 'stage1',
        component: Stage1Component
    },
    {
        path: 'stage2',
        component: Stage2Component
    },
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
