import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';
import { AppAuthService } from 'src/app/app-auth.service';
import { DocumentService } from 'src/app/show-documents/document.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  showErrorMessage: boolean;
  constructor(
    private _usersFb: FormBuilder,
    private _authService: AuthService,
    private _appAuthService: AppAuthService,
    private _documentService: DocumentService,
    private _dialogRef: MatDialogRef<SigninComponent>
  ) {}
  usersGroup: FormGroup;




  ngOnInit() {
    this.usersGroup = this._usersFb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  captureUserInput() {
    this._authService.signin(this.usersGroup).subscribe(value => {
      if (value.status === 200) {
        this._authService.userName = this.usersGroup.value.userName;
        this._authService.password = this.usersGroup.value.password;
        this._appAuthService.userSignedIn = true;
        this._documentService.userName = this.usersGroup.value.userName;
        this._dialogRef.close();
      } else if (value.status === 400) {
        this.showErrorMessage = true;
        setTimeout(() => {
          this._dialogRef.close();
        }, 3000);
      }
    });
  }
}
