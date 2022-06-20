import { Component, forwardRef, OnInit } from '@angular/core';
import { TabGroupWithDirectiveComponent } from '../tab-group-with-directive/tab-group-with-directive.component';

@Component({
  selector: 'app-bs-tab-group-with-directive',
  templateUrl: './bs-tab-group-with-directive.component.html',
  styleUrls: ['./bs-tab-group-with-directive.component.scss'],
  providers: [
    {
      provide: TabGroupWithDirectiveComponent,
      useExisting: forwardRef(() => BsTabGroupWithDirectiveComponent),
    },
  ],
})
export class BsTabGroupWithDirectiveComponent
  extends TabGroupWithDirectiveComponent
  implements OnInit {
  // constructor() {}
  // ngOnInit(): void {}
}
