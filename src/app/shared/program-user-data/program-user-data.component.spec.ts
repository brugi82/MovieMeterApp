import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramUserDataComponent } from './program-user-data.component';

describe('ProgramUserDataComponent', () => {
  let component: ProgramUserDataComponent;
  let fixture: ComponentFixture<ProgramUserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramUserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
