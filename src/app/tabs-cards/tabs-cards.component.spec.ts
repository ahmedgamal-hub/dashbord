import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCardsComponent } from './tabs-cards.component';

describe('TabsCardsComponent', () => {
  let component: TabsCardsComponent;
  let fixture: ComponentFixture<TabsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsCardsComponent]
    });
    fixture = TestBed.createComponent(TabsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
