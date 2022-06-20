import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCircleHookComponent } from './life-circle-hook.component';

describe('LifeCircleHookComponent', () => {
  let component: LifeCircleHookComponent;
  let fixture: ComponentFixture<LifeCircleHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCircleHookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCircleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
