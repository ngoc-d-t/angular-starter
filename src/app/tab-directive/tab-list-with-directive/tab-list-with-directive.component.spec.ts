import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabListWithDirectiveComponent } from './tab-list-with-directive.component';

describe('TabListWithDirectiveComponent', () => {
  let component: TabListWithDirectiveComponent;
  let fixture: ComponentFixture<TabListWithDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabListWithDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabListWithDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
