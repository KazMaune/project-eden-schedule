import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageSetComponent } from './stage-set.component';

describe('StageSetComponent', () => {
    let component: StageSetComponent;
    let fixture: ComponentFixture<StageSetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ StageSetComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StageSetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
