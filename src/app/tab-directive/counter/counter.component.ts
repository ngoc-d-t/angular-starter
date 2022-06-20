import { Component, OnInit } from '@angular/core';

let id = 1;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  id = id++;
}
