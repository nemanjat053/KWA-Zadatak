import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prijava-ispita',
  templateUrl: './prijava-ispita.component.html',
  styleUrls: ['./prijava-ispita.component.scss']
})
export class PrijavaIspitaComponent implements OnInit {
  exams = [];
  students = [];

  nazivPredmeta = '';
  izabranStudent = '';

  constructor(
    private fb: FormBuilder,
    private _service: StudentServiceService
  ) {}

  ngOnInit(): void {
    this._service.getAllExams().subscribe(
      response => (this.exams = response),
      error => console.log('Error ' + error)
    );
    this._service.getAllStudent().subscribe(
      response => (this.students = response),
      error => console.log('Error ' + error)
    );
  }

  selectChangeHandler(event: any) {
    this.nazivPredmeta = event.target.value;
  }

  selectChangeHandler1(event: any) {
    this.izabranStudent = event.target.value;
  }

  

  prijavaIspita() {
    var prijava  = this.fb.group({
      id: [''],
      ime: [this.izabranStudent],
      nazivPredmeta: [this.nazivPredmeta]
    })

    var raw = prijava.getRawValue();

    console.log(raw);

    this._service.prijaviIspit(raw).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error " + error)
    )
  }
}