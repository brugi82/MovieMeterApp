import { LoaderComponent } from './../shared/loader/loader.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  declarations: [BasicSearchComponent, AdvancedSearchComponent],
  exports: [AngularMaterialModule, SharedModule]
})
export class SearchModule { }
