import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinic } from '../model/clinic';
import { RepositoryService } from '../shared/repository.service';

@Injectable()
export class ClinicService {

  clinicList: Clinic[] = [];

  constructor(private webService: RepositoryService, private http: HttpClient) { }

  getClinics(): Observable<Clinic[]> {
    const route = 'Clinic/GetClinics';
    return this.webService.getData(route);
  }

  getClinicNameList(): Observable<Clinic[]> {
    const route = 'Clinic/GetClinicNameList';
    return this.webService.getData(route);
  }

  createClinic(entity: Clinic): Observable<Clinic> {
    const route = 'Clinic/CreateClinic';
    return this.webService.create(route, entity);
  }

  updateClinic(entity: Clinic): Observable<Clinic> {
    const route = 'Clinic/UpdateClinic';
    return this.webService.update(route, entity);
  }

  deleteClinic(id: string): Observable<Clinic> {
    const route = `Clinic/DeleteClinic?id=${id}`;
    return this.webService.getData(route);
  }

  deleteClinics(entities: string[]): Observable<Clinic[]> {
    const route = 'Clinic/DeleteClinics';
    return this.webService.update(route, entities);
  }
}