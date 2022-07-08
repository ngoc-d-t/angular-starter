import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  @Input() data = { index: 0 };

  constructor(private cdf: ChangeDetectorRef) {}

  ngOnInit(): void {}
  markForCheck() {
    this.cdf.markForCheck();
  }
}
