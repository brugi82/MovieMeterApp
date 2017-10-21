import { ProgramService } from './../program.service';
import { IProgram } from './../model/program';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {
  program: IProgram;
  id: string;
  error: string;
  constructor(private _programService: ProgramService, private _activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');

    this._programService.getProgram(this.id)
                        .subscribe(prog => this.program = prog,
                                    error => this.error = <any>error);
  }

}
