import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
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
    this.getClinics();
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
        this.clinicService.deleteClinics(this.selectedClinics.map(c => c.clinicId)).subscribe();
        this.clinics = this.clinics.filter(val => !this.selectedClinics.includes(val));
        this.selectedClinics = null;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Clínicas excluídas', life: 3000 });
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
        this.clinicService.deleteClinic(clinic.clinicId).subscribe();
        this.clinics = this.clinics.filter(val => val.clinicId !== clinic.clinicId);
        this.clinic = {};
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Clínica excluída', life: 3000 });
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
      if (this.clinic.clinicId) {
        this.clinicService.updateClinic(this.clinic).subscribe(clinic => (this.clinic = clinic));
        const index = this.clinic ? this.clinics.findIndex(h => h.clinicId === this.clinic.clinicId) : -1;

        if (index > -1) {
          this.clinics[index] = this.clinic;
        }
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Clínica Atualizada', life: 3000 });
      }
      else {
        this.clinicService.createClinic(this.clinic).subscribe(clinic => (this.clinic = clinic));
        this.clinics.push(this.clinic);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Clínica Criada', life: 3000 });
      }
      this.clinics = [...this.clinics];
      this.clinicDialog = false;
      this.clinic = {};
    }
  }

  getClinics(): void {
    this.clinicService.getClinics().subscribe(clinics => (this.clinics = clinics));
  }
}