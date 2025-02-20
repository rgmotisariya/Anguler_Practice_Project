import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSMachineComponent } from './pos-machine.component';

describe('POSMachineComponent', () => {
  let component: POSMachineComponent;
  let fixture: ComponentFixture<POSMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [POSMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POSMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
