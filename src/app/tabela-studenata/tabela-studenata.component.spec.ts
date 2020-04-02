import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaStudenataComponent } from './tabela-studenata.component';

describe('TabelaStudenataComponent', () => {
  let component: TabelaStudenataComponent;
  let fixture: ComponentFixture<TabelaStudenataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaStudenataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaStudenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
