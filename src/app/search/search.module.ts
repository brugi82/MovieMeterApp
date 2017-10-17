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
    FormsModule
  ],
  declarations: [BasicSearchComponent, AdvancedSearchComponent]
})
export class SearchModule { }
