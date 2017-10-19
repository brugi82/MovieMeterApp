import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { LoaderService } from './loader/loader.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ProgramListComponent,
    ProgramDetailsComponent,
    LoaderComponent,
    AngularMaterialModule
  ],
  declarations: [ProgramListComponent, ProgramDetailsComponent, LoaderComponent]
})
export class SharedModule { }
