import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTabGroupWithDirectiveComponent } from './bs-tab-group-with-directive.component';

describe('BsTabGroupWithDirectiveComponent', () => {
  let component: BsTabGroupWithDirectiveComponent;
  let fixture: ComponentFixture<BsTabGroupWithDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsTabGroupWithDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsTabGroupWithDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
