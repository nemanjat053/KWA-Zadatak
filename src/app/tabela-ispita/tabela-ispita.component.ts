import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-ispita',
  templateUrl: './tabela-ispita.component.html',
  styleUrls: ['./tabela-ispita.component.scss']
})
export class TabelaIspitaComponent implements OnInit {
  exams = [];

  constructor(
    private _studentService: StudentServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._studentService.getAllExams().subscribe(
      response => (this.exams = response),
      error => console.log('Error ' + error)
    );
  }


  examForm = this.fb.group({
    nazivPredmeta: [''],
    sifraPredmeta: [''],
    datumIspita: ['']
  });

  addNew() {
    var raw = this.examForm.getRawValue();
    this._studentService.createNewExam(raw).subscribe(
      response => console.log('Response ' + response),
      error => console.log('Error ' + error)
    );
  }

  deleteExam(id) {
    this._studentService.deleteExam(id).subscribe(
      response => console.log('Response ' + response),
      error => console.log('Error ' + error)
    );
  }
}
