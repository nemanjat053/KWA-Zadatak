import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-tabela-studenata-detail',
  templateUrl: './tabela-studenata-detail.component.html',
  styleUrls: ['./tabela-studenata-detail.component.scss']
})
export class TabelaStudenataDetailComponent implements OnInit {
  @Input() chosenStudent;

  public novoIme: string
  public novoPrezime: string

  constructor(private fb: FormBuilder, private _service : StudentServiceService) {}

  ngOnInit(): void {
    console.log(this.chosenStudent)
  }
  
  change() {
    var forma = this.fb.group({
      indeks: [this.chosenStudent.indeks],
      ime: [this.novoIme],
      prezime: [this.novoPrezime]
    })
    var raw = forma.getRawValue();

    this._service.changeStudent(raw, this.chosenStudent.id).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error" + error)
    )
  }
}
