import { NgModule } from "@angular/core";
import { AttendanceService } from './attendance.service';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';

const routes: Routes = [{ path: '', component: AttendanceComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

    ToastModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule

  ],
  exports: [RouterModule, AttendanceComponent],
  declarations: [AttendanceComponent, AttendanceDetailComponent, AttendanceListComponent, AttendanceDetailComponent],
  providers: [AttendanceService]
})
export class AttendanceModule { }