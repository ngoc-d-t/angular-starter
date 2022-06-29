import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  constructor() {}
  hero = { name: '', password: '' };
  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl(this.hero.password, Validators.required),
    });
    console.log('check: ', this.heroForm);
  }

  get name() {
    return this.heroForm.get('name');
  }

  get password() {
    return this.heroForm.get('password');
  }
}
