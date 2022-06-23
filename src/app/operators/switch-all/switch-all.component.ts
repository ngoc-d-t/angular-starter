import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, switchAll, take } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.scss'],
})
export class SwitchAllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  clicks = fromEvent(document, 'click');
  higherOrder = this.clicks.pipe(map(() => interval(1000).pipe(take(10))));
  firstOrder = this.higherOrder.pipe(switchAll());

  ngAfterContentInit() {
    console.log('click: ', this.clicks);
    console.log('merge-all-component', this.firstOrder.subscribe());
    this.firstOrder.subscribe((x) => {
      console.log('value: ', x);
    });
  }
}
