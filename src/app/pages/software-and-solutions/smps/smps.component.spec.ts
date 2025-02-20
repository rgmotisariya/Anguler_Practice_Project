import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMPSComponent } from './smps.component';

describe('SMPSComponent', () => {
  let component: SMPSComponent;
  let fixture: ComponentFixture<SMPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SMPSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
