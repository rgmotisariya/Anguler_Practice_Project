import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyERPComponent } from './dairy-erp.component';

describe('DairyERPComponent', () => {
  let component: DairyERPComponent;
  let fixture: ComponentFixture<DairyERPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyERPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyERPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
