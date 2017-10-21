import { AppRoutingModule } from './../app-routing.module';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { LoaderService } from './loader/loader.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { LoaderComponent } from './loader/loader.component';
import { ProgramUserDataComponent } from './program-user-data/program-user-data.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  exports: [
    ProgramDetailsComponent,
    LoaderComponent,
    AngularMaterialModule,
    AppRoutingModule
  ],
  declarations: [ProgramDetailsComponent, LoaderComponent, ProgramUserDataComponent]
})
export class SharedModule { }
