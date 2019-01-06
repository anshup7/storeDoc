import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import {
  MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule, MatSnackBarModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatCardModule
} from '@angular/material';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignupComponent,
    AuthComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [AuthComponent],
  entryComponents: [SignupComponent, SigninComponent],
  providers: [AuthService]
})
export class AuthModule { }
