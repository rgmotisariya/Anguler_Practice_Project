import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogoSliderComponent } from './home-logo-slider.component';

describe('HomeLogoSliderComponent', () => {
  let component: HomeLogoSliderComponent;
  let fixture: ComponentFixture<HomeLogoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLogoSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLogoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
