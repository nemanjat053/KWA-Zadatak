import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaStudenataComponent } from './tabela-studenata/tabela-studenata.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { TabelaIspitaComponent } from './tabela-ispita/tabela-ispita.component';
import { TabelaStudenataDetailComponent } from './tabela-studenata/tabela-studenata-detail/tabela-studenata-detail.component';
import { PrijavaIspitaComponent } from './prijava-ispita/prijava-ispita.component';
import { PrijavljeniIspitiComponent } from './prijavljeni-ispiti/prijavljeni-ispiti.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaStudenataComponent,
    RegistracijaComponent,
    TabelaIspitaComponent,
    TabelaStudenataDetailComponent,
    PrijavaIspitaComponent,
    PrijavljeniIspitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
