import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkAnalizerComponent } from './milk-analizer.component';

describe('MilkAnalizerComponent', () => {
  let component: MilkAnalizerComponent;
  let fixture: ComponentFixture<MilkAnalizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilkAnalizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkAnalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
