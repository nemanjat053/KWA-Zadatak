import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaStudenataComponent } from './tabela-studenata/tabela-studenata.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { TabelaIspitaComponent } from './tabela-ispita/tabela-ispita.component';
import { PrijavaIspitaComponent } from './prijava-ispita/prijava-ispita.component';


const routes: Routes = [
  { path: 'listStudent', component: TabelaStudenataComponent},
  { path: 'listIspiti', component: TabelaIspitaComponent},
  { path: 'registration', component: RegistracijaComponent},
  { path: 'prijaviIspit', component: PrijavaIspitaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TabelaStudenataComponent, RegistracijaComponent, TabelaIspitaComponent, PrijavaIspitaComponent]