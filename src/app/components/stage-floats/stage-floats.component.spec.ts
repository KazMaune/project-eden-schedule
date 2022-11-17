import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageFloatsComponent } from './stage-floats.component';

describe('StageFloatsComponent', () => {
    let component: StageFloatsComponent;
    let fixture: ComponentFixture<StageFloatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ StageFloatsComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StageFloatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
