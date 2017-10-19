import { ProgramQueryFactory } from './../../shared/model/program-query.factory';
import { IProgramQuery, ProgramQuery } from './../../shared/model/program-query';
import { IProgram } from './../../shared/model/program';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})
export class BasicSearchComponent implements OnInit {
  programCount: number;
  programs: IProgram[];
  errorMessage: string;
  query: IProgramQuery;
  selectedGenres: string[];
  availableGenres: string[] = [
    'Action',
    'Adventure',
    'Comedy',
    'Crime',
    'Drama',
    'Family',
    'Fantasy',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Thriller',
  ];
  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this.query = ProgramQueryFactory.getBasicSearchDefaultQuery();
  }

  search(): void {
     this._searchService.search(this.query).subscribe(programs => this.programs = programs,
       error => this.errorMessage = <any>error);
  }

}
