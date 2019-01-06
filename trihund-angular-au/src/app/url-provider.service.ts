import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlProviderService {
  constructor() {}
  login = 'http://localhost:3000/login';
  register = 'http://localhost:3000/register';
  fetchDoc = 'http://localhost:3000/fetchDoc';
  storeDoc = 'http://localhost:3000/storeDoc';
}


