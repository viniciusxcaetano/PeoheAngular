import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Clinic } from '../model/clinic';
import { RepositoryService } from 'src/app/shared/repository.service';

@Injectable()
export class ClinicService {

  clinicList: Clinic[] = [];

  constructor(private webService: RepositoryService, private http: HttpClient) { }

  createClinic(entity: Clinic): Observable<Clinic> {

    const route = 'Clinic/CreateClinic';
    return this.webService.create(route, entity);
  }

  load(): void {
    this.getClinics().subscribe(result => {
      this.clinicList = result;
    },
      err => {
        console.error('error loading', err);
        let erro = err;
      }
    )
  }

  getClinics(): Observable<Clinic[]> {
    const route = 'Clinic/GetClinics';
    return this.webService.getData(route);
  }

}