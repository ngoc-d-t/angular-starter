import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, mergeAll, take } from 'rxjs';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.scss'],
})
export class MergeAllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  clicks = fromEvent(document, 'click');
  higherOrder = this.clicks.pipe(map(() => interval(1000).pipe(take(10))));
  firstOrder = this.higherOrder.pipe(mergeAll());

  ngAfterContentInit() {
    console.log('click: ', this.clicks);
    console.log('merge-all-component', this.firstOrder.subscribe());
    this.firstOrder.subscribe((x) => {
      console.log('value: ', x);
    });
  }
}
