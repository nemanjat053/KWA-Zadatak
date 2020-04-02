import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prijava-ispita',
  templateUrl: './prijava-ispita.component.html',
  styleUrls: ['./prijava-ispita.component.scss']
})
export class PrijavaIspitaComponent implements OnInit {

  exams = []
  students = []

  constructor(private fb: FormBuilder, private _service : StudentServiceService) { }

  ngOnInit(): void {
    this._service.getAllExams().subscribe(
      response => this.exams = response,
      error => console.log("Error " + error)
    )
    this._service.getAllStudent().subscribe(
      response => this.students = response,
      error => console.log("Error " + error)
    )
  }

  prijaviIspitForm = this.fb.group({
    ime: [''],
    nazivPredmeta: ['']
  })

  

  prijavaIspita(){
    
  }

}
