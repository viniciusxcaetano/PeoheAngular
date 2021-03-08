import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-installment-list',
  templateUrl: './installment-list.component.html',
  styleUrls: ['./installment-list.component.scss'],
//   styles: [`
//     :host ::ng-deep .p-dialog {
//         width: 150px;
//         margin: 0 auto 2rem auto;
//         display: block;
//     }
// `],
})

export class InstallmentListComponent implements OnInit {

  @Input() installment;
  
  ngOnInit(): void { 

  }

}