import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Clinic } from 'src/app/model/Clinic';
import { ClinicService } from '../clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss'],
  styles: [`
    :host ::ng-deep .p-dialog {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
    }
`],
  providers: [MessageService, ConfirmationService]
})
export class ClinicComponent implements OnInit {

  clinicDialog: boolean;
  clinics: Clinic[];
  clinic: Clinic;
  selectedClinics: Clinic[];
  submitted: boolean;


  constructor(private clinicService: ClinicService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.clinicService.load();
    this.clinics = this.clinicService.clinicList;
  }

  openNew() {
    this.clinic = {};
    this.submitted = false;
    this.clinicDialog = true;
  }

  deleteSelectedClinics() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir as clínicas selecionadas?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clinics = this.clinics.filter(val => !this.selectedClinics.includes(val));
        this.selectedClinics = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Clínicas excluídas', life: 3000 });
      }
    });
  }

  editClinic(clinic: Clinic) {
    this.clinic = { ...clinic };
    this.clinicDialog = true;
  }

  deleteClinic(clinic: Clinic) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir ' + clinic.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangule',
      accept: () => {
        this.clinics = this.clinics.filter(val => val.clinidId !== clinic.clinidId);
        this.clinic = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Clínica excluída', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.clinicDialog = false;
    this.submitted = false;
  }

  saveClinic() {
    this.submitted = true;

    if (this.clinic.name.trim()) {
      if (this.clinic.clinidId) {
        this.clinics[this.findIndexById(this.clinic.clinidId)] = this.clinic;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Clínica Atualizada', life: 3000 });
      }
      else {
        this.clinics.push(this.clinic);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Clínica Criada', life: 3000 });
      }
      this.clinics = [...this.clinics];
      this.clinicDialog = false;
      this.clinic = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.clinics.length; i++) {
      if (this.clinics[i].clinidId === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}