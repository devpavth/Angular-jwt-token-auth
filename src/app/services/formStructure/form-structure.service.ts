import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormStructureService {

  constructor(private productHttp: HttpClient) {}

  productTransaction(id: any) {
    // return this.productHttp.get(environment.productTransaction + id);
  }
}
