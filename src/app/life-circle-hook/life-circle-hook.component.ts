import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-life-circle-hook',
  templateUrl: './life-circle-hook.component.html',
  styleUrls: ['./life-circle-hook.component.scss'],
  providers: [DataService],
})
export class LifeCircleHookComponent implements OnInit {
  constructor(private dservice: DataService) {}

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

  infoReceived1: string[] = [];

  infoReceived2: string[] = [];

  infoReceived3: string[] = [];

  getInfoFromService1() {
    this.infoReceived1 = this.dservice.getInfo1();
  }

  getInfoFromService2() {
    this.infoReceived2 = this.dservice.getInfo2();
  }

  getInfoFromService3() {
    this.infoReceived3 = this.dservice.getInfo3();
  }
}
