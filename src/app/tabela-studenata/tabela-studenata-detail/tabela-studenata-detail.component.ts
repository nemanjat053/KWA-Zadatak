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

  constructor() {}

  ngOnInit(): void {
    console.log(this.chosenStudent)
  }
  
  change() {}
}
