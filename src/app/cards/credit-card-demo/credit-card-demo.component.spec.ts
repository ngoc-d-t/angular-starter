import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardDemoComponent } from './credit-card-demo.component';

describe('CreditCardDemoComponent', () => {
  let component: CreditCardDemoComponent;
  let fixture: ComponentFixture<CreditCardDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
