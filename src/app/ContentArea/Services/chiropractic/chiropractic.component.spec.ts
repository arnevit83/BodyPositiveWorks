import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiropracticComponent } from './chiropractic.component';

describe('ChiropracticComponent', () => {
  let component: ChiropracticComponent;
  let fixture: ComponentFixture<ChiropracticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiropracticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiropracticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
