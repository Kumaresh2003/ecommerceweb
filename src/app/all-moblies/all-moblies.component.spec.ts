import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMobliesComponent } from './all-moblies.component';

describe('AllMobliesComponent', () => {
  let component: AllMobliesComponent;
  let fixture: ComponentFixture<AllMobliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMobliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMobliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
