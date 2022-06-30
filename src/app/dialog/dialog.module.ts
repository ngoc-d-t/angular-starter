import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DialogOverviewExampleDialogComponent,
    DialogOverviewExampleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class DialogModule {}
