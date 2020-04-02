import { Component, OnInit, Input, Output } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-studenata',
  templateUrl: './tabela-studenata.component.html',
  styleUrls: ['./tabela-studenata.component.scss']
})
export class TabelaStudenataComponent implements OnInit {
  students = [];
  chosenStudent: {};

  constructor(private _studentService: StudentServiceService) {}

  ngOnInit(): void {
    this._studentService.getAllStudent().subscribe(
      response => (this.students = response),
      error => console.log('Error ' + error)
    );
  }

  detailStudent(id) {
    this.students.map(student => {
      if (student.id === id) {
        this.chosenStudent = student;
      }
    });
  }

  deleteStudent(id) {
    this._studentService.deleteStudent(id).subscribe(
      response => console.log("Response " + response),
      error => console.log('Error ' + error)
    );
  }
}
