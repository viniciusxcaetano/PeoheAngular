import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from '../model/attendance';
import { RepositoryService } from '../shared/repository.service';

@Injectable()
export class AttendanceService {

    attedanceList: Attendance[] = [];

    constructor(private webService: RepositoryService, private http: HttpClient) { }

    getAttendances(): Observable<Attendance[]> {
        const route = 'Attendance/GetAttendances';
        return this.webService.getData(route);
    }

    createAttendance(entity: Attendance): Observable<Attendance> {
        const route = 'Attendance/CreateAttendance';
        return this.webService.create(route, entity);
    }

    updateAttendance(entity: Attendance): Observable<Attendance> {
        const route = 'Attendance/UpdateAttendance';
        return this.webService.update(route, entity);
    }

    deleteAttendance(id: string): Observable<Attendance> {
        const route = `Attendance/DeleteAttendance?id=${id}`;
        return this.webService.getData(route);
    }

    deleteAttendances(entities: string[]): Observable<Attendance[]> {
        const route = 'Attendance/DeleteAttendances';
        return this.webService.update(route, entities);
    }
}