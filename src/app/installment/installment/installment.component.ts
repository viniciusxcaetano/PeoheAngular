import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Attendance } from 'src/app/model/attendance';
import { Installment } from 'src/app/model/Installment';
import { InstallmentService } from '../installment.service';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss'],
  styles: [`
    :host ::ng-deep .p-dialog {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
    }
`],
  providers: [MessageService, ConfirmationService]
})
export class InstallmentComponent implements OnInit {

  @Input() attendance: Attendance;
  @Output() unselect = new EventEmitter<string>();
  @Output() outPutSelectedInstallments = new EventEmitter<Installment[]>();

  installments: Installment[];
  selectedInstallment: Installment;
  selectedInstallments: Installment[];
  visible: boolean = true;

  constructor(private installmentService: InstallmentService) { }

  ngOnInit(): void {
    this.fillInstallments();
  }

  onChangeInstallment() {
    this.selectedInstallments = [];
    var days = 30;
    let amountDue = this.attendance.amountPaid != null ? this.attendance.amount - this.attendance.amountPaid : this.attendance.amount;
    for (var i = 0; i < this.installments.length; i++) {
      if (this.installments[i].installmentNumber <= this.selectedInstallment.installmentNumber) {
        var month = new Date();
        this.installments[i].amount = parseFloat((amountDue / this.selectedInstallment.installmentNumber).toFixed(2));
        month.setMonth(month.getMonth() + i);
        this.installments[i].dueDate = month;
        this.selectedInstallments.push(this.installments[i]);
      }
    }
  }

  fillInstallments() {

    let amountDue = this.attendance.amountPaid != null ? this.attendance.amount - this.attendance.amountPaid : this.attendance.amount;
    //amount: parseFloat((amountDue / 2).toFixed(2))
    this.installments = [
      { installmentNumber: 1, formattedInstallment: '1 x ' + amountDue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 2, formattedInstallment: '2 x ' + (amountDue / 2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 3, formattedInstallment: '3 x ' + (amountDue / 3).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 4, formattedInstallment: '4 x ' + (amountDue / 4).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 5, formattedInstallment: '5 x ' + (amountDue / 5).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 6, formattedInstallment: '6 x ' + (amountDue / 6).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 7, formattedInstallment: '7 x ' + (amountDue / 7).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 8, formattedInstallment: '8 x ' + (amountDue / 8).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 9, formattedInstallment: '9 x ' + (amountDue / 9).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 10, formattedInstallment: '10 x ' + (amountDue / 10).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 11, formattedInstallment: '11 x ' + (amountDue / 11).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 12, formattedInstallment: '12 x ' + (amountDue / 12).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
    ];
  }

  close() {
    this.unselect.emit();
  }

  saveInstallments() {
    this.outPutSelectedInstallments.emit(this.selectedInstallments);
    this.unselect.emit();
  }

  ngOnDestroy() {
    console.log('onDestroy');
    //quando fechar o componente
  }

}