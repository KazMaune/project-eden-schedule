import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageHeaderComponent } from './stage-header.component';

describe('StageHeaderComponent', () => {
    let component: StageHeaderComponent;
    let fixture: ComponentFixture<StageHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ StageHeaderComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
