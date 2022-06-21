import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor() {}
  getCreditCard(): string {
    return '2131313133123174098';
  }
}
