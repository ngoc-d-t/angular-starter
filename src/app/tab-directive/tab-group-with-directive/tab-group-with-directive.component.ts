import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { TabPanelWithDirectiveComponent } from '../tab-panel-with-directive/tab-panel-with-directive.component';
import { TabPanelComponent } from '../../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group-with-directive',
  templateUrl: './tab-group-with-directive.component.html',
  styleUrls: ['./tab-group-with-directive.component.scss'],
})
export class TabGroupWithDirectiveComponent
  implements OnInit, AfterContentInit
{
  @Input() tabActiveIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();

  @ContentChildren(TabPanelWithDirectiveComponent)
  tabPanelList?: QueryList<TabPanelWithDirectiveComponent>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    console.log('list: ', this.tabPanelList);
    this?.tabPanelList?.changes.subscribe(() => {
      if (
        this.tabPanelList &&
        this.tabPanelList.length <= this.tabActiveIndex
      ) {
        this.selectItem(0);
      }
    });
  }

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    this.tabActiveChange.emit(idx);
  }
}
