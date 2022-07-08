import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public data = {
    index: 0,
  };
  constructor(private cdf: ChangeDetectorRef) {}

  ngOnChange() {
    console.log('ngOnChange running');
  }
  ngOnInit(): void {
    console.log('ngOnInit running');
  }
  ngDoCheck() {
    console.log('ngDoCheck running');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit running');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked running');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit running');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked running');
  }
  ngDestroy() {
    console.log('ngDestroy running');
  }

  detach() {
    this.cdf.detach();
  }

  detectChanges() {
    this.cdf.detectChanges();
  }

  checkNoChanges() {
    this.cdf.checkNoChanges();
  }

  reattach() {
    this.cdf.reattach();
  }

  add() {
    this.data.index++;
  }
}
