import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
  providers: [MessageService],
})
export class HeroPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
