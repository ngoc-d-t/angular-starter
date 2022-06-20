import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelWithDirectiveComponent } from './tab-panel-with-directive.component';

describe('TabPanelWithDirectiveComponent', () => {
  let component: TabPanelWithDirectiveComponent;
  let fixture: ComponentFixture<TabPanelWithDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPanelWithDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPanelWithDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
