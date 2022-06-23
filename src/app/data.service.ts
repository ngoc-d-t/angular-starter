import { Injectable } from '@angular/core';
import { LifeCircleHookComponent } from './life-circle-hook/life-circle-hook.component';

@Injectable()
// @Injectable({
//   providedIn: LifeCircleHookComponent,
// })
export class DataService {
  constructor() {}
  info1: string[] = ['John Mathew', 'E354', 'jm@abc.net'];

  info2: string[] = ['Rob Wilson', 'E673', 'rw@abc.net'];

  info3: string[] = ['Rose Adams', 'E865', 'ra@abc.net'];
  getInfo1(): string[] {
    return this.info1;
  }

  getInfo2(): string[] {
    return this.info2;
  }

  getInfo3(): string[] {
    return this.info3;
  }
}
