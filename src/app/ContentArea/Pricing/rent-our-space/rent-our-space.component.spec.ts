import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOurSpaceComponent } from './rent-our-space.component';

describe('RentOurSpaceComponent', () => {
  let component: RentOurSpaceComponent;
  let fixture: ComponentFixture<RentOurSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentOurSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentOurSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
