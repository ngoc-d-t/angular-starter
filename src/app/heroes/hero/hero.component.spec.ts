import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModulesComponent } from './hero.component';

describe('FormModulesComponent', () => {
  let component: FormModulesComponent;
  let fixture: ComponentFixture<FormModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
