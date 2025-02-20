import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicWeightMachineComponent } from './electronic-weight-machine.component';

describe('ElectronicWeightMachineComponent', () => {
  let component: ElectronicWeightMachineComponent;
  let fixture: ComponentFixture<ElectronicWeightMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicWeightMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicWeightMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
