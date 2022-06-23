import { Component, OnInit } from '@angular/core';
import { exhaustAll, fromEvent, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-all',
  templateUrl: './exhaust-all.component.html',
  styleUrls: ['./exhaust-all.component.scss'],
})
export class ExhaustAllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  clicks = fromEvent(document, 'click');
  higherOrder = this.clicks.pipe(map(() => interval(1000).pipe(take(10))));
  firstOrder = this.higherOrder.pipe(exhaustAll());

  ngAfterContentInit() {
    console.log('click: ', this.clicks);
    console.log('merge-all-component', this.firstOrder.subscribe());
    this.firstOrder.subscribe((x) => {
      console.log('value: ', x);
    });
  }
}
