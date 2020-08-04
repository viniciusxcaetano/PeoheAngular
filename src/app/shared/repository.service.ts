import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clinic } from '../model/Clinic';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  apiAddress: string = 'https://localhost:44348/api';

  constructor(private http: HttpClient) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route));
  }

  public create(route: string, body) {
    let test = this.createCompleteRoute(route);
    let responsee =this.http.post<any>(this.createCompleteRoute(route), body);
    return responsee;
  }
  // public create(route: string, body) {
  //   return this.http.post(this.createCompleteRoute(route), body, this.genereteHeaders());
  // }

  public createFiles(route: string, body) {
    return this.http.post(this.createCompleteRoute(route), body);
  }

  public update(route: string, body) {
    return this.http.put(this.createCompleteRoute(route), body);
  }
  // public update(route: string, body) {
  //   return this.http.put(this.createCompleteRoute(route), body, this.genereteHeaders());
  // }

  public delete(route: string) {
    return this.http.delete(this.createCompleteRoute(route));
  }

  private createCompleteRoute(route: string) {
    return `${this.apiAddress}/${route}`;
  }

  // private genereteHeaders() {
  //   return {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  // }
}