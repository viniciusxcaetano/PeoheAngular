import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  providers: [MessageService]
})
export class AttendanceComponent implements OnInit {

  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({ label: 'Selecione o gênero', value: '' });
    this.genders.push({ label: 'Masculino', value: 'Male' });
    this.genders.push({ label: 'Feminino', value: 'Female' });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

}
