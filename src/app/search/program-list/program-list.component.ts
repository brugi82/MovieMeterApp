import { DataService } from './../../shared/data.service';
import { IProgramQuery } from './../../shared/model/program-query';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './../search.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProgram } from '../../shared/model/program';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit, OnChanges {
  programs: IProgram[];
  query: IProgramQuery;
  errorMessage: string;
  constructor(private _searchService: SearchService, private _dataService: DataService) { }

  ngOnInit() {
    this.query = this._dataService.query;

    this._searchService.search(this.query).subscribe(programs => this.programs = programs,
                                                      error => this.errorMessage = error);
  }

  ngOnChanges(changes: SimpleChanges): void {
      }

}
