import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-prijavljeni-ispiti',
  templateUrl: './prijavljeni-ispiti.component.html',
  styleUrls: ['./prijavljeni-ispiti.component.scss']
})
export class PrijavljeniIspitiComponent implements OnInit {

  prijavljeniIspiti = {}

  constructor(private _service : StudentServiceService) { }

  ngOnInit(): void {
    
    this._service.getPrijavljeniIspiti().subscribe(
      response => this.prijavljeniIspiti = response,
      error => console.log("Error" + error)
    )

  }

}
