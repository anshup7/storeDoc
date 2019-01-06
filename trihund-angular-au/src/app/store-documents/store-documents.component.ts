import { Component, OnInit } from '@angular/core';
import { FormTypeHandler } from './store-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { StoreDocumentsService } from './store-documents.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-store-documents',
  templateUrl: './store-documents.component.html',
  styleUrls: ['./store-documents.component.css']
})
export class StoreDocumentsComponent implements OnInit {
  showSuccessMessage: boolean;

  constructor(private _fb: FormBuilder,
              private _authService: AuthService,
              private _storeService: StoreDocumentsService,
              private _dialogRef: MatDialogRef<StoreDocumentsComponent>) { }

  formHandler: FormTypeHandler;
  aadharFormGroup: FormGroup;
  dlFormGroup: FormGroup;
  passportFormGroup: FormGroup;
  voterIdFormGroup: FormGroup;
  panFormGroup: FormGroup;

  ngOnInit() {
    this.formHandler = new FormTypeHandler();
    this.aadharFormGroup = this._fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      aadharNumber: ['', Validators.required]
    });
    this.dlFormGroup = this._fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      dlNumber: ['', Validators.required],
      vehicleType: ['', Validators.required]
    });
    this.passportFormGroup = this._fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      passportNumber: ['', Validators.required],
      dateOfExpiry: ['', Validators.required]
    });
    this.voterIdFormGroup = this._fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      voterIdNumber: ['', Validators.required]
    });
    this.panFormGroup = this._fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      panNumber: ['', Validators.required]
    });
  }

  radioButtonClicked(event: any) {
    if (event === 'aadhar') {
      this.formHandler.showAadharForm = true;
      this.formHandler.showDrivingLicenseForm = false;
      this.formHandler.showPassportForm = false;
      this.formHandler.showVoterIdForm = false;
      this.formHandler.showPanForm = false;
    } else if (event === 'dl') {
      this.formHandler.showAadharForm = false;
      this.formHandler.showDrivingLicenseForm = true;
      this.formHandler.showPassportForm = false;
      this.formHandler.showVoterIdForm = false;
      this.formHandler.showPanForm = false;
    } else if (event === 'passport') {
      this.formHandler.showAadharForm = false;
      this.formHandler.showDrivingLicenseForm = false;
      this.formHandler.showPassportForm = true;
      this.formHandler.showVoterIdForm = false;
      this.formHandler.showPanForm = false;
    } else if (event === 'voterId') {
      this.formHandler.showAadharForm = false;
      this.formHandler.showDrivingLicenseForm = false;
      this.formHandler.showPassportForm = false;
      this.formHandler.showVoterIdForm = true;
      this.formHandler.showPanForm = false;
    } else if (event === 'pan') {
      this.formHandler.showAadharForm = false;
      this.formHandler.showDrivingLicenseForm = false;
      this.formHandler.showPassportForm = false;
      this.formHandler.showVoterIdForm = false;
      this.formHandler.showPanForm = true;
    }
  }

  captureDocData(formType: string) {

    if (formType === 'aadhar') {
      const sendingObject = Object.create(null);
      sendingObject.userName = this._authService.userName;
      sendingObject.documentType = 'Aadhar';
      sendingObject.documentData = '{name:' + this.aadharFormGroup.value.name + ', age:' +
      this.aadharFormGroup.value.age + ', number:' + this.aadharFormGroup.value.aadharNumber + '}';
      console.log(sendingObject);
      this.storeDoc(sendingObject);
    } else if (formType === 'dl') {
      const sendingObject = Object.create(null);
      sendingObject.userName = this._authService.userName;
      sendingObject.documentType = 'Driving License';
      sendingObject.documentData = '{name:' + this.dlFormGroup.value.name + ', age:' +
      this.dlFormGroup.value.age + ', number:' + this.dlFormGroup.value.dlNumber +
        ', vehicleType:' + this.dlFormGroup.value.vehicleType + '}';

      console.log(sendingObject);
      this.storeDoc(sendingObject);

    } else if (formType === 'passport') {
      const sendingObject = Object.create(null);
      sendingObject.userName = this._authService.userName;
      sendingObject.documentType = 'Passport';
      sendingObject.documentData = '{name:' + this.passportFormGroup.value.name + ', age:' +
      this.passportFormGroup.value.age + ', number:' + this.passportFormGroup.value.passportNumber +
        ', validity:' + this.passportFormGroup.value.dateOfExpiry + '}';
      console.log(sendingObject);
      this.storeDoc(sendingObject);

    } else if (formType === 'voterId') {
      const sendingObject = Object.create(null);
      sendingObject.userName = this._authService.userName;
      sendingObject.documentType = 'Voter ID';
      sendingObject.documentData = '{name:' + this.voterIdFormGroup.value.name + ', age:' +
      this.voterIdFormGroup.value.age + ', number:' + this.voterIdFormGroup.value.voterIdNumber + '}';
      console.log(sendingObject);
      this.storeDoc(sendingObject);

    } else {
      const sendingObject = Object.create(null);
      sendingObject.userName = this._authService.userName;
      sendingObject.documentType = 'PAN Card';
      sendingObject.documentData = '{name:' + this.panFormGroup.value.name + ', age:' +
      this.panFormGroup.value.age + ', number:' + this.panFormGroup.value.panNumber + '}';
      console.log(sendingObject);
      this.storeDoc(sendingObject);

    }
  }

  storeDoc(doc: any) {
    this._storeService.storeDocument(doc).subscribe(response => {
      this.showSuccessMessage = true;
      setTimeout(() => {
        this._dialogRef.close(true);
      }, 1500);
    });
  }

}
