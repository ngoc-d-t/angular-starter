import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  constructor() {}
  // constructor(private checked: Boolean) {}

  ngOnInit(): void {}
  checked: boolean = false;
  toggle(): void {}
  // getChecked() {
  //   return this.checked;
  // }
}
