import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BasicSearchComponent, AdvancedSearchComponent]
})
export class SearchModule { }
