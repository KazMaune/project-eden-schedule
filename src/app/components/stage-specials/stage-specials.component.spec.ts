import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageSpecialsComponent } from './stage-specials.component';

describe('StageSpecialsComponent', () => {
    let component: StageSpecialsComponent;
    let fixture: ComponentFixture<StageSpecialsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ StageSpecialsComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StageSpecialsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
