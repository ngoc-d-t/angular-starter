import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  switched = of(1, 2, 3).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));

  clicks = fromEvent(document, 'click');
  result = this.clicks.pipe(switchMap(() => interval(1000).pipe(take(5))));

  ngAfterContentInit() {
    // this.switched.subscribe((x) => console.log(x));
    this.result.subscribe((x) => console.log(x));
  }
}
