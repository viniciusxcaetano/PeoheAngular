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
    for (var i = 0; i < this.installments.length; i++) {
      if (this.installments[i].installmentNumber <= this.selectedInstallment.installmentNumber) {
        var today = new Date();
        today.setMonth(today.getMonth() + i);
        this.installments[i].dueDate = today;
        this.selectedInstallments.push(this.installments[i]);
      }
    }
  }

  fillInstallments() {

    let amountDue = this.attendance.amountPaid != null ? this.attendance.amount - this.attendance.amountPaid : this.attendance.amount;

    this.installments = [
      { installmentNumber: 1, amount: amountDue, formattedInstallment: '1 x ' + amountDue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 2, amount: parseFloat((amountDue / 2).toFixed(2)), formattedInstallment: '2 x ' + (amountDue / 2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 3, amount: parseFloat((amountDue / 3).toFixed(2)), formattedInstallment: '3 x ' + (amountDue / 3).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 4, amount: parseFloat((amountDue / 4).toFixed(2)), formattedInstallment: '4 x ' + (amountDue / 4).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 5, amount: parseFloat((amountDue / 5).toFixed(2)), formattedInstallment: '5 x ' + (amountDue / 5).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 6, amount: parseFloat((amountDue / 6).toFixed(2)), formattedInstallment: '6 x ' + (amountDue / 6).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 7, amount: parseFloat((amountDue / 7).toFixed(2)), formattedInstallment: '7 x ' + (amountDue / 7).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 8, amount: parseFloat((amountDue / 8).toFixed(2)), formattedInstallment: '8 x ' + (amountDue / 8).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 9, amount: parseFloat((amountDue / 9).toFixed(2)), formattedInstallment: '9 x ' + (amountDue / 9).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 10, amount: parseFloat((amountDue / 10).toFixed(2)), formattedInstallment: '10 x ' + (amountDue / 10).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 11, amount: parseFloat((amountDue / 11).toFixed(2)), formattedInstallment: '11 x ' + (amountDue / 11).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
      { installmentNumber: 12, amount: parseFloat((amountDue / 12).toFixed(2)), formattedInstallment: '12 x ' + (amountDue / 12).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + ' (sem juros)' },
    ];
  }

  close() {
    this.unselect.emit();
  }

  saveInstallments() {
    console.log('saveInstallments> ' + JSON.stringify(this.selectedInstallments));
  }

  ngOnDestroy() {
    console.log('onDestroy');
    //quando fechar o componente
  }

}