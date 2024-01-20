import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDealComponent } from './today-deal.component';

describe('TodayDealComponent', () => {
  let component: TodayDealComponent;
  let fixture: ComponentFixture<TodayDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayDealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
