import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-installment-list',
  templateUrl: './installment-list.component.html'
})

export class InstallmentListComponent implements OnInit {

  @Input() installment;
  
  ngOnInit(): void { 

  }

}