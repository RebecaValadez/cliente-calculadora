import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperacionserviceService {

  headers = {
    "Access-Control-Allow-Origin": "*"
  }
  apiUrl = '/api/v1/Operations';

  constructor(private http: HttpClient) { }

  suma(s:any) {
    return this.http.post(`${this.apiUrl}/Add`, s, {headers: this.headers});
  }
  resta(s:any) {
    return this.http.post(`${this.apiUrl}/Subtraction`, s, {headers: this.headers});
  }
  multiplicacion(s:any) {
    return this.http.post(`${this.apiUrl}/Multiplication`, s, {headers: this.headers});
  }
  division(s:any) {
    return this.http.post(`${this.apiUrl}/Division`, s, {headers: this.headers});
  }
}
