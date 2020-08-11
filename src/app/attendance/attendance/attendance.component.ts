import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Attendance } from 'src/app/model/attendance';
import { AttendanceService } from '../attendance.service';
import { Status } from 'src/app/model/enum/Attendance';
import { selectedItem } from 'src/app/shared/selectedItem';

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
  attendance: Attendance;
  selectedAttendances: Attendance[];
  submitted: boolean;

  status = Object.keys(Status).filter(a => a.match(/^\D/)).map(name => (new selectedItem(name, Status[name])));
  selectedStatus: selectedItem;

  constructor(private attendanceService: AttendanceService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getAttendances();
    this.selectedStatus = this.status[0];
  }

  openNew() {
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
    this.selectedStatus = this.status[0];
  }
  saveAttendance() {
    this.submitted = true;

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
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Atendimento Criado', life: 3000 });
    }
    this.attendances = [...this.attendances];
    this.attendanceDialog = false;
    this.attendance = {};
  }

  getAttendances(): void {
    this.attendanceService.getAttendances().subscribe(attendances => (this.attendances = attendances));
  }
}