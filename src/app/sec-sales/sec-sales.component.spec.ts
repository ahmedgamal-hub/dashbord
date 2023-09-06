import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecSalesComponent } from './sec-sales.component';

describe('SecSalesComponent', () => {
  let component: SecSalesComponent;
  let fixture: ComponentFixture<SecSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecSalesComponent]
    });
    fixture = TestBed.createComponent(SecSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
