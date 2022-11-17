import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageStaffComponent } from './stage-staff.component';

describe('StageStaffComponent', () => {
    let component: StageStaffComponent;
    let fixture: ComponentFixture<StageStaffComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ StageStaffComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StageStaffComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
