import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './view/home/home.component';
import { AppTopBarComponent } from './layout/app.topbar.component';
import { AppSideBarComponent } from './layout/app.sidebar.component';
import { RepositoryService } from './shared/repository.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppTopBarComponent,
    AppSideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    RepositoryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
