import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTherapyComponent } from './art-therapy.component';

describe('ArtTherapyComponent', () => {
  let component: ArtTherapyComponent;
  let fixture: ComponentFixture<ArtTherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtTherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
