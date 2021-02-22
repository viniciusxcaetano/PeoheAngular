import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceService } from './attendance.service';

import { ClinicService } from '../clinic/clinic.service';

import { InstallmentComponent } from "../installment/installment/installment.component";
import { InstallmentService } from "../installment/installment.service";


import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';

const routes: Routes = [{ path: '', component: AttendanceComponent }];

@NgModule({

  declarations: [AttendanceComponent, AttendanceDetailComponent, AttendanceListComponent, AttendanceDetailComponent, InstallmentComponent],
  exports: [RouterModule, AttendanceComponent],
  providers: [AttendanceService, ClinicService, InstallmentService],
  bootstrap: [AttendanceComponent, AttendanceDetailComponent, AttendanceListComponent, AttendanceDetailComponent],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

    ProgressBarModule,
    FileUploadModule,
    RadioButtonModule,
    ToolbarModule,
    TooltipModule,
    TableModule,
    InputNumberModule,
    ConfirmDialogModule,
    RatingModule,
    SliderModule,
    MultiSelectModule,
    DialogModule,
    CalendarModule,
    ContextMenuModule,
    ToastModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TabViewModule,
    DropdownModule
  ],
})

export class AttendanceModule { }