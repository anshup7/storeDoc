import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../auth-models';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material';
import { AppAuthService } from 'src/app/app-auth.service';
import { DocumentService } from 'src/app/show-documents/document.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUser: FormGroup;
  showSuccessMessage: boolean;
  sendingUserDataObj: UserData;
  showErrorMessage: boolean;
  errorMessage: any;


  constructor(private _fgRegister: FormBuilder,
              private _authService: AuthService,
              private _dialogRef: MatDialogRef<SignupComponent>,
              private _appAuthService: AppAuthService,
              private _documentSevice: DocumentService) {}


  ngOnInit() {
    this.registerUser = this._fgRegister.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  captureUserInput() {
    this._authService.signup(this.registerUser).subscribe(value => {
      if (value.status === 200) {
        this.showSuccessMessage = true;
        this._appAuthService.userSignedIn = true;
        this._authService.userName = this.registerUser.value.userName;
        this._authService.password = this.registerUser.value.password;
        this._documentSevice.userName = this.registerUser.value.userName;
        setTimeout(() => {
          this._dialogRef.close();
        }, 3000);
      }
    }, error => {
      this.showErrorMessage = true;
      this.errorMessage = error.statusText;
        setTimeout(() => {
          this._dialogRef.close();
        }, 3000);
    });
  }
}
