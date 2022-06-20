import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabPanelContentDirective } from '../../tab-panel-content.directive';

@Component({
  selector: 'app-tab-panel-with-directive',
  templateUrl: './tab-panel-with-directive.component.html',
  styleUrls: ['./tab-panel-with-directive.component.scss'],
})
export class TabPanelWithDirectiveComponent implements OnInit {
  @Input() title: string = '';
  @ViewChild(TemplateRef, { static: true }) implicitBody!: TemplateRef<unknown>;

  @ContentChild(TabPanelContentDirective, { static: true, read: TemplateRef })
  explicitBody!: TemplateRef<unknown>;

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }
  constructor() {}

  ngOnInit(): void {}
}
