import { Component, OnInit } from '@angular/core';
import { concatAll, fromEvent, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss'],
})
export class ConcatAllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  clicks = fromEvent(document, 'click');
  higherOrder = this.clicks.pipe(map(() => interval(1000).pipe(take(10))));
  firstOrder = this.higherOrder.pipe(concatAll());

  ngAfterContentInit() {
    console.log('click: ', this.clicks);
    console.log('merge-all-component', this.firstOrder.subscribe());
    this.firstOrder.subscribe((x) => {
      console.log('value: ', x);
    });
  }
}
