import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninComponent } from './auth/signin/signin.component';
import { AppAuthService } from './app-auth.service';
import { StoreDocumentsComponent } from './store-documents/store-documents.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trihund-angular-au';
  signedIn: boolean;
  refreshShowDocumentsData: boolean;
  constructor(public dialog: MatDialog, public appAuthService: AppAuthService) {}

  openSignInDialog(eventClick: any) {
    eventClick.preventDefault();
    const dialogRef = this.dialog.open(SigninComponent, { width: '200px' });
  }

  openSignUpDialog(eventClick: any) {
    eventClick.preventDefault();
    const dialogRef = this.dialog.open(SignupComponent, { width: '500px' });
  }

  openAddDocDialog(eventClick: any) {
    eventClick.preventDefault();
    const dialogRef = this.dialog.open(StoreDocumentsComponent, { width: '1500px'});
    dialogRef.afterClosed().subscribe(result => {
      this.refreshShowDocumentsData = result;
    });
  }

  logout(eventClick: any) {
    this.appAuthService.userSignedIn = false;
  }


}
