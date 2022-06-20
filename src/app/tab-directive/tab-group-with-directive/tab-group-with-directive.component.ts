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

  constructor() {
    console.log('constructor list: ', this.tabPanelList);
  }

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    this.tabActiveChange.emit(idx);
  }

  ngOnChange() {
    console.log('ngOnChange running');
    console.log('list: ', this.tabPanelList);
  }
  ngOnInit(): void {
    console.log('ngOnInit running');
    console.log('list: ', this.tabPanelList);
  }
  ngDoCheck() {
    console.log('ngDoCheck running');
    console.log('list: ', this.tabPanelList);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit running');
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
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked running');
    console.log('list: ', this.tabPanelList);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit running');
    console.log('list: ', this.tabPanelList);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked running');
    console.log('list: ', this.tabPanelList);
  }
  ngDestroy() {
    console.log('ngDestroy running');
    console.log('list: ', this.tabPanelList);
  }
}
