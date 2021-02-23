import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-installment-list',
  template: `
  <div class="card-content">
    <div class="content">
      <div class="installmentNumber">{{ installmentNumber }}</div>
      <div class="amount">{{ amount }}</div>
    </div>
  </div>
`
})
export class InstallmentListComponent implements OnInit {

  @Input() installmentNumber;
  @Input() amount;

  ngOnInit(): void { }

}