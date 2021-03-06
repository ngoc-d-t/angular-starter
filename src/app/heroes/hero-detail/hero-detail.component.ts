import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/types/Hero';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined;
  constructor() {}

  ngOnInit(): void {}
}
