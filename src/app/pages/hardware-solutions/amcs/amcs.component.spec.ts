import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMCSComponent } from './amcs.component';

describe('AMCSComponent', () => {
  let component: AMCSComponent;
  let fixture: ComponentFixture<AMCSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AMCSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
