import { Component, OnInit, Output, EventEmitter, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { DocumentService } from './document.service';
import { FileUploader , FileSelectDirective } from 'ng2-file-upload';

@Component({
  selector: 'app-show-documents',
  templateUrl: './show-documents.component.html',
  styleUrls: ['./show-documents.component.css']
})
export class ShowDocumentsComponent implements OnInit, OnChanges {

  constructor(private _documentService: DocumentService) { }
  parsedDocumentDetails = [];
  showParsedDocuments: boolean;
  @Input() refreshData: boolean;

  ngOnInit() {

    this._documentService.fetchDocument().subscribe(documentObject => {
      documentObject.result.forEach((documentDetails) => {
        console.log('doc', documentDetails);
        if (documentDetails.document_type === 'Aadhar') {
          const stringyfied = JSON.stringify(documentDetails.document_data);
          this.parsedDocumentDetails.push({
            name: stringyfied.split(',')[0].split(':')[1],
            age: stringyfied.split(',')[1].split(':')[1],
            aadharNumber: stringyfied.split(',')[2].split(':')[1].split('}')[0],
            documentType: documentDetails.document_type
          });
        } else if (documentDetails.document_type === 'Driving License') {
          const stringyfied = JSON.stringify(documentDetails.document_data);
          this.parsedDocumentDetails.push({
            name: stringyfied.split(',')[0].split(':')[1],
            age: stringyfied.split(',')[1].split(':')[1],
            vehicleType: stringyfied.split(',')[3].split(':')[1].split('}')[0],
            dlNumber: stringyfied.split(',')[2].split(':')[1],
            documentType: documentDetails.document_type
          });
        } else if (documentDetails.document_type === 'Passport') {
          const stringyfied = JSON.stringify(documentDetails.document_data);
          this.parsedDocumentDetails.push({
            name: stringyfied.split(',')[0].split(':')[1],
            age: stringyfied.split(',')[1].split(':')[1],
            passportNumber: stringyfied.split(',')[2].split(':')[1],
            validity: stringyfied.split(',')[3].split(':')[1].split('}')[0],
            documentType: documentDetails.document_type
          });
        } else if (documentDetails.document_type === 'Voter ID') {
          const stringyfied = JSON.stringify(documentDetails.document_data);
          this.parsedDocumentDetails.push({
            name: stringyfied.split(',')[0].split(':')[1],
            age: stringyfied.split(',')[1].split(':')[1],
            idNumber: stringyfied.split(',')[2].split(':')[1].split('}')[0],
            documentType: documentDetails.document_type
          });
        } else if (documentDetails.document_type === 'PAN Card') {
          const stringyfied = JSON.stringify(documentDetails.document_data);
          this.parsedDocumentDetails.push({
            name: stringyfied.split(',')[0].split(':')[1],
            age: stringyfied.split(',')[1].split(':')[1],
            panNumber: stringyfied.split(',')[2].split(':')[1].split('}')[0],
            documentType: documentDetails.document_type
          });
        }
      });
      this.showParsedDocuments = true;
      console.log('parsedDocumentDetails', this.parsedDocumentDetails);

    });

  }

  ngOnChanges(change: SimpleChanges) {
    if (change.refreshData.currentValue) {
      this.triggerRefreshEvent();
    }
  }

  triggerRefreshEvent(eventClick?: any) {
    this.showParsedDocuments = false; // Reset what was set earlier and again fetch the data from server
    this.parsedDocumentDetails = [];
    this.ngOnInit();
  }

}
