import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTOMSComponent } from './rtoms.component';

describe('RTOMSComponent', () => {
  let component: RTOMSComponent;
  let fixture: ComponentFixture<RTOMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RTOMSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RTOMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
