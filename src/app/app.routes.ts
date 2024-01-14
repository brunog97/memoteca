import { Routes } from '@angular/router';
import { NovopensamentoComponent } from './components/pensamentos/novopensamento/novopensamento.component';
import { MuralPensamentosComponent } from './components/pensamentos/mural-pensamentos/mural-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
  {
    path:'', // rota padrão
    redirectTo: 'muralPensamento',
    pathMatch: 'full'
  },
  {
    path: 'novoPensamento', // rota a ser acessada
    component: NovopensamentoComponent
  },{
    path: 'muralPensamento',
    component: MuralPensamentosComponent
  }, {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  }, {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];
