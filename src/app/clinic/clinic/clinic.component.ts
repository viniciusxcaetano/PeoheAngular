import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Clinic } from 'src/app/model/Clinic';
import { ClinicService } from '../clinic.service';


@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  providers: [MessageService]
})
export class ClinicComponent implements OnInit {

  userform: FormGroup;
  submitted: boolean;


  constructor(private clinicService: ClinicService, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    //this.newClinic = new Clinic();
    this.userform = this.fb.group({
      'Name': new FormControl('', Validators.required),
      'Phone': new FormControl(''),
      'Address': new FormControl(''),
      'Comments': new FormControl(''),
      'percentage': new FormControl('', [Validators.max(100), Validators.min(0)])
    });
  }

  onSubmit(value: string) {
    let newClinic = new Clinic(this.userform.value);

    this.clinicService.createClinic(newClinic).subscribe(response => {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Salvo com sucesso!' });
    })

    //this.submitted = true;
  }

  get diagnostic() {

    //return JSON.stringify(this.userform.value);
    return
  }

}
