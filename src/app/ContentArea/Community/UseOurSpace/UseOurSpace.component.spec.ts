import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseOurSpaceComponent } from './UseOurSpace.component';

describe('UseOurSpaceComponent', () => {
  let component: UseOurSpaceComponent;
  let fixture: ComponentFixture<UseOurSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseOurSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseOurSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
