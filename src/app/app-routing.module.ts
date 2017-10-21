import { ProgramDetailsComponent } from './shared/program-details/program-details.component';
import { AdvancedSearchComponent } from './search/advanced-search/advanced-search.component';
import { BasicSearchComponent } from './search/basic-search/basic-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramListComponent } from './search/program-list/program-list.component';

const routes: Routes = [
  { path: 'basic-search', component: BasicSearchComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent },
  { path: 'program/:id', component: ProgramDetailsComponent },
  { path: 'program-list', component: ProgramListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'basic-search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
