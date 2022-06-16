import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html',
  styleUrls: ['./hello-world-ngif.component.scss'],
  // template: ` <div
  //   class="progress-bar-container"
  //   [style.backgroundColor]="backgroundColor"
  // >
  //   <div
  //     class="progress"
  //     [style]="{
  //       backgroundColor: progressColor,
  //       width: progress + '%'
  //     }"
  //   ></div>
  // </div>`,
  // styles: [
  //   `
  //     .progress-bar-container,
  //     .progress {
  //       height: 20px;
  //     }

  //     .progress-bar-container {
  //       width: 100%;
  //     }
  //   `,
  // ],
})
export class HelloWorldNgifComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  message = "I'm read only!";
  canEdit = false;
  @Input() backgroundColor?: string;
  @Input() progressColor?: string;
  @Input() progress = 0;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
