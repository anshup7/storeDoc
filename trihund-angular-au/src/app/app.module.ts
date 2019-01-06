import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule, MatSnackBarModule,
   MatProgressSpinnerModule, MatProgressBarModule, MatCardModule} from '@angular/material';
import { ShowDocumentsModule } from './show-documents/show-documents-module';
import { StoreDocumentsModule } from './store-documents/store-documents-module';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ShowDocumentsModule,
    StoreDocumentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
