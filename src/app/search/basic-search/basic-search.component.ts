import { DataService } from './../../shared/data.service';
import { ProgramQueryFactory } from './../../shared/model/program-query.factory';
import { IProgramQuery, ProgramQuery } from './../../shared/model/program-query';
import { IProgram } from './../../shared/model/program';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})
export class BasicSearchComponent implements OnInit {
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
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this.query = this._dataService.query ? this._dataService.query : ProgramQueryFactory.getBasicSearchDefaultQuery();
  }

  search(): void {
    this._dataService.query = this.query;

     this._router.navigate(['/program-list']);
  }

}
