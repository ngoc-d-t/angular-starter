import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-list-with-directive',
  templateUrl: './tab-list-with-directive.component.html',
  styleUrls: ['./tab-list-with-directive.component.scss'],
})
export class TabListWithDirectiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showTab = true;
}
