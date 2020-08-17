import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Attendance } from 'src/app/model/attendance';
import { AttendanceService } from '../attendance.service';
import { Status, TypeOfPayment } from 'src/app/model/enum/Attendance';
import { Enum } from 'src/app/shared/enum';
import { ClinicService } from 'src/app/clinic/clinic.service';
import { Clinic } from 'src/app/model/Clinic';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
  styles: [`
    :host ::ng-deep .p-dialog {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
    }
`],
  providers: [MessageService, ConfirmationService]
})
export class AttendanceComponent implements OnInit {

  attendanceDialog: boolean;
  attendances: Attendance[];
  selectedAttendances: Attendance[];
  clinics: Clinic[];
  selectedClinic: Clinic;
  attendance: Attendance;
  submitted: boolean;
  status = Enum.get(Status);
  typeOfPayment = Enum.get(TypeOfPayment);
  selectedStatus: Enum;
  selectedTypeOfPayment: Enum;

  constructor(
    private attendanceService: AttendanceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private clinicService: ClinicService
  ) { }

  ngOnInit() {
    this.getAttendances();
    this.getClinicNameList();
  }

  openNew() {

    this.selectedStatus = this.status[0]; //Default Status
    this.selectedTypeOfPayment = null;
    this.attendance = {};
    this.submitted = false;
    this.attendanceDialog = true;
  }

  deleteSelectedAttendances() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir os atendimentos selecionadas?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.attendanceService.deleteAttendances(this.selectedAttendances.map(c => c.attendanceId)).subscribe();
        this.attendances = this.attendances.filter(val => !this.selectedAttendances.includes(val));
        this.selectedAttendances = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Atendimentos excluídos', life: 3000 });
      }
    });
  }

  editAttendance(attendance: Attendance) {
    this.selectedStatus = this.status[attendance.status];
    this.selectedTypeOfPayment = this.typeOfPayment[attendance.typeOfPayment];
    this.attendance = { ...attendance };
    this.attendanceDialog = true;
  }

  deleteAttendance(attendance: Attendance) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o atendimento?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangule',
      accept: () => {
        this.attendanceService.deleteAttendance(attendance.attendanceId).subscribe();
        this.attendances = this.attendances.filter(val => val.attendanceId !== attendance.attendanceId);
        this.attendance = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Atendimento excluído', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.attendanceDialog = false;
    this.submitted = false;
  }

  getStatus(number: any) {
    return typeof number === "string" ? Status[number] : Object.values(Status)[number];
  }
  getTypeOfPayment(number: any) {
    return typeof number === "string" ? TypeOfPayment[number] : Object.values(TypeOfPayment)[number];
  }

  saveAttendance() {

    this.submitted = true;
    this.attendance.status = this.selectedStatus.key as Status;
    this.attendance.typeOfPayment = this.selectedTypeOfPayment.key as TypeOfPayment;
    this.attendance.clinic = this.selectedClinic;

    if (this.attendance.attendanceId) {
      this.attendanceService.updateAttendance(this.attendance).subscribe(attendance => (this.attendance = attendance));
      const index = this.attendance ? this.attendances.findIndex(h => h.attendanceId === this.attendance.attendanceId) : -1;

      if (index > -1) {
        this.attendances[index] = this.attendance;
      }
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Atendimento Atualizado', life: 3000 });
    }
    else {
      this.attendanceService.createAttendance(this.attendance).subscribe(attendance => (this.attendance = attendance));
      this.attendances.push(this.attendance);
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Atendimento Criado', life: 3000 });
    }
    this.attendances = [...this.attendances];
    this.attendanceDialog = false;
    this.selectedClinic = {};
    this.attendance = {};
  }

  getAttendances(): void {
    this.attendanceService.getAttendances().subscribe(attendances => (this.attendances = attendances));
  }

  getClinicNameList(): void {
    this.clinicService.getClinicNameList().subscribe(clinics => (this.clinics = clinics));
  }
}