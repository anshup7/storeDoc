import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';
import { ShowDocumentsComponent } from './show-documents.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ShowDocumentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [ShowDocumentsComponent]
})
export class ShowDocumentsModule {}
