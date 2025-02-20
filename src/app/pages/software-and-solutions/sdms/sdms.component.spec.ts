import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDMSComponent } from './sdms.component';

describe('SDMSComponent', () => {
  let component: SDMSComponent;
  let fixture: ComponentFixture<SDMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SDMSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
