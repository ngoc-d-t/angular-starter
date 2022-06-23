import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFirstComponent } from './lazy-first.component';

describe('LazyFirstComponent', () => {
  let component: LazyFirstComponent;
  let fixture: ComponentFixture<LazyFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
