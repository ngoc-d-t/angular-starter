import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() product: Product | undefined;
  @Output() notify: EventEmitter<string> = new EventEmitter();
  // @Output() emitEventNotify: EventEmitter<string> = new EventEmitter<string>();
  onNotify() {
    window.alert('hihi');
  }
  emitEventNotify(value: string) {
    this.notify.emit(value);
  }
}
