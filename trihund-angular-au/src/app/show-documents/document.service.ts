import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Document} from './document-model';
import { UrlProviderService } from '../url-provider.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private _http: HttpClient, private _urlProvider: UrlProviderService) {}
  userName: string = null;

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  fetchDocument(): Observable<Document> {
    return this._http.post<Document>
      (this._urlProvider.fetchDoc, {userName: this.userName}, this._httpOptions);
  }

  }

