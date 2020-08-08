import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  apiAddress: string = 'https://localhost:44348/api';

  constructor(private http: HttpClient) { }

  public getData(route: string) {
    return this.http.get<any>(this.createCompleteRoute(route));
  }

  public create(route: string, body) {
    return this.http.post<any>(this.createCompleteRoute(route), body);
  }

  public update(route: string, body) {
    return this.http.post<any>(this.createCompleteRoute(route), body);
  }

  private createCompleteRoute(route: string) {
    return `${this.apiAddress}/${route}`;
  }

  // public create(route: string, body) {
  //   return this.http.post(this.createCompleteRoute(route), body, this.genereteHeaders());
  // }

  // public createFiles(route: string, body) {
  //   return this.http.post(this.createCompleteRoute(route), body);
  // }

  // public update(route: string, body) {
  //   return this.http.put(this.createCompleteRoute(route), body, this.genereteHeaders());
  // }

  // private genereteHeaders() {
  //   return {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  // }
}