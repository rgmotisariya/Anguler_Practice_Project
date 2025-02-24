import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JDComponent } from './jd.component';

describe('JDComponent', () => {
  let component: JDComponent;
  let fixture: ComponentFixture<JDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
