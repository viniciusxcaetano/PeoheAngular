import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) },
      { path: 'clinic', loadChildren: () => import('./clinic/clinic.module').then(m => m.ClinicModule) },
      //{ path: 'installment', loadChildren: () => import('./installment/installment.module').then(m => m.InstallmentModule) }

    ], { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }