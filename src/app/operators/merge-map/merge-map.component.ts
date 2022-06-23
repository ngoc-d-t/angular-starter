import { Component, OnInit } from '@angular/core';
import { interval, map, mergeMap, of, take } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  letters = of('a', 'b', 'c');
  result = this.letters.pipe(
    mergeMap((x) =>
      interval(1000).pipe(
        map((i) => x + i),
        take(4)
      )
    )
  );
  ngAfterContentInit() {
    this.result.subscribe((x) => console.log(x));
  }
}
