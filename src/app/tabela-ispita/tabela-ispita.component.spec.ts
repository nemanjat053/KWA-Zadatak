import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaIspitaComponent } from './tabela-ispita.component';

describe('TabelaIspitaComponent', () => {
  let component: TabelaIspitaComponent;
  let fixture: ComponentFixture<TabelaIspitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaIspitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaIspitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
