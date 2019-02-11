import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAndBundlesComponent } from './pricing-and-bundles.component';

describe('PricingAndBundlesComponent', () => {
  let component: PricingAndBundlesComponent;
  let fixture: ComponentFixture<PricingAndBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingAndBundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingAndBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
