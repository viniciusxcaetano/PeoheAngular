import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Clinic } from 'src/app/model/Clinic';
import { ClinicService } from '../clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  providers: [MessageService]
})
export class ClinicComponent implements OnInit {

  constructor(private clinicService: ClinicService, private fb: FormBuilder, private messageService: MessageService) { }

  userform: FormGroup;

  ngOnInit() {
    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'phone': new FormControl(''),
      'address': new FormControl(''),
      'comments': new FormControl(''),
      'percentage': new FormControl('', [Validators.max(100), Validators.min(0)])
    });
  }

  onSubmit(value: string) {
    let newClinic = new Clinic(this.userform.value);

    this.clinicService.createClinic(newClinic).subscribe(response => {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Salvo com sucesso!' });
    })
  }
}