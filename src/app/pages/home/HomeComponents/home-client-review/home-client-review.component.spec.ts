import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientReviewComponent } from './home-client-review.component';

describe('HomeClientReviewComponent', () => {
  let component: HomeClientReviewComponent;
  let fixture: ComponentFixture<HomeClientReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeClientReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeClientReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
