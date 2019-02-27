import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychotherapyComponent } from './Psychotherapy.component';

describe('PsychotherapyComponent', () => {
  let component: PsychotherapyComponent;
  let fixture: ComponentFixture<PsychotherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychotherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
