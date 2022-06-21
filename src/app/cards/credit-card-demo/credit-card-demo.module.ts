import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardService } from '../credit-card.service';
import { CreditCardMaskPipe } from '../credit-card-mask.pipe';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { CreditCardDemoComponent } from './credit-card-demo.component';

@NgModule({
  declarations: [
    CreditCardDemoComponent,
    CreditCardMaskPipe,
    CreditCardComponent,
  ],
  imports: [CommonModule],
  providers: [CreditCardService],
  bootstrap: [CreditCardDemoComponent],
})
export class CreditCardDemoModule {}
