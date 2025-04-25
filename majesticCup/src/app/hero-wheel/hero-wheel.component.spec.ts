import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroWheelComponent } from './hero-wheel.component';

describe('HeroWheelComponent', () => {
  let component: HeroWheelComponent;
  let fixture: ComponentFixture<HeroWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroWheelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
