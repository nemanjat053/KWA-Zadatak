import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.scss']
})
export class RegistracijaComponent implements OnInit {

  constructor(private fb : FormBuilder, private _studentService: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    ime: [''],
    prezime: [''],
    indeks: ['']
  })

  registracija(){
    var formObj = this.registrationForm.getRawValue();
    this._studentService.createNewStudent(formObj).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error " + error)
    )
    this.router.navigate(['/listStudent'])
  }

}
