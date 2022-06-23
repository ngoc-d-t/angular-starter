import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-map',
  templateUrl: './flat-map.component.html',
  styleUrls: ['./flat-map.component.scss'],
})
export class FlatMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  a = [5, 4, -3, 20, 17, -33, -4, 18];

  ngAfterContentInit() {
    this.a = this.a.flatMap((n) =>
      n < 0 ? [] : n % 2 == 0 ? [n] : [n - 1, 1]
    );
    console.log('data: ', this.a);
  }
}
