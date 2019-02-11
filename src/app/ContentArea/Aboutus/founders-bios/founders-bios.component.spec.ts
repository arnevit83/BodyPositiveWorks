import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersBiosComponent } from './founders-bios.component';

describe('FoundersBiosComponent', () => {
  let component: FoundersBiosComponent;
  let fixture: ComponentFixture<FoundersBiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundersBiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundersBiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
