import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreDocResponse } from './store-documents-model';
import { UrlProviderService } from '../url-provider.service';

@Injectable({
  providedIn: 'root'
})
export class StoreDocumentsService {
  constructor(private _http: HttpClient, private _urlProvider: UrlProviderService) {}

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  storeDocument(sendingObject: any): Observable<StoreDocResponse> {
    return this._http.post<StoreDocResponse>(
      this._urlProvider.storeDoc,
      sendingObject,
      this._httpOptions
    );
  }
}
