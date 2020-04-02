import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaStudenataDetailComponent } from './tabela-studenata-detail.component';

describe('TabelaStudenataDetailComponent', () => {
  let component: TabelaStudenataDetailComponent;
  let fixture: ComponentFixture<TabelaStudenataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaStudenataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaStudenataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
