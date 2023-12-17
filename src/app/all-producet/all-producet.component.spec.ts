import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProducetComponent } from './all-producet.component';

describe('AllProducetComponent', () => {
  let component: AllProducetComponent;
  let fixture: ComponentFixture<AllProducetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProducetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProducetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
