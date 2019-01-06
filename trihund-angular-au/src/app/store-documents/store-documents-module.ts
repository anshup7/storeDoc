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
  MatTabsModule,
  MatRadioModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StoreDocumentsComponent } from './store-documents.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StoreDocumentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  entryComponents: [StoreDocumentsComponent],
  exports: [StoreDocumentsComponent]
})
export class StoreDocumentsModule { }
