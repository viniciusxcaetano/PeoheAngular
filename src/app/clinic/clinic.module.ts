import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClinicComponent } from './clinic/clinic.component';
import { ClinicService } from './clinic.service';

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

const routes: Routes = [{ path: '', component: ClinicComponent }];

@NgModule({

  declarations: [ClinicComponent],
  exports: [RouterModule, ClinicComponent],
  providers: [ClinicService],
  bootstrap: [ClinicComponent],

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
    TabViewModule
  ]
})
export class ClinicModule { }