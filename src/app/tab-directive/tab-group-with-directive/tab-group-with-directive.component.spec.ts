import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupWithDirectiveComponent } from './tab-group-with-directive.component';

describe('TabGroupWithDirectiveComponent', () => {
  let component: TabGroupWithDirectiveComponent;
  let fixture: ComponentFixture<TabGroupWithDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGroupWithDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGroupWithDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
