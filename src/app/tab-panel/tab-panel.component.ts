import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @Input() title: string = '';
  @ViewChild(TemplateRef, { static: true }) panelBody:
    | TemplateRef<unknown>
    | undefined;
  constructor(private tabGroup: TabGroupComponent) {}
  ngOnInit() {
    this.tabGroup.addTabPanel(this);
    console.log('check: ', this.panelBody);
  }
  ngOnDestroy() {
    this.tabGroup.removeTabPanel(this);
  }
}
