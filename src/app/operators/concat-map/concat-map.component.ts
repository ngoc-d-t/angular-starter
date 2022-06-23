import { Component, OnInit } from '@angular/core';
import { concatMap, fromEvent, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  clicks = fromEvent(document, 'click');
  result = this.clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));

  ngAfterContentInit() {
    this.result.subscribe((x) => console.log(x));
  }
}
