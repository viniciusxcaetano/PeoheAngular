import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Attendance } from '../model/attendance';

const apiAddress = 'https://localhost:44348/api';

@Injectable()
export class AttendanceService implements OnInit {
    constructor(private http: HttpClient) { }

    public attendance: Attendance;

    ngOnInit() {
        let attendance = new Attendance();
        attendance.amount = 34300;
        attendance.typeOfPayment = 1;
        attendance.installmentsAmount = 6;

        this.http.post<Attendance>(`${apiAddress}/Attendance/CreateAttendance`, attendance);

    }
    getAttendances() {
        return this.http
            .get<Array<Attendance>>(`${apiAddress}/attendances`)
            .pipe(
                map(attendances => attendances)
            );
    }

    private handleError(res: HttpErrorResponse) {
        console.error(res.error);
        return Observable.throw(res.error || 'Server error');
    }
}