import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurServicesComponent } from './home-our-services.component';

describe('HomeOurServicesComponent', () => {
  let component: HomeOurServicesComponent;
  let fixture: ComponentFixture<HomeOurServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOurServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
