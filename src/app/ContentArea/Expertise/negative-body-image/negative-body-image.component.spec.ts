import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeBodyImageComponent } from './negative-body-image.component';

describe('NegativeBodyImageComponent', () => {
  let component: NegativeBodyImageComponent;
  let fixture: ComponentFixture<NegativeBodyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegativeBodyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeBodyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
