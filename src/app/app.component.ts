import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { NovopensamentoComponent } from './components/pensamentos/novopensamento/novopensamento.component';
import { MuralPensamentosComponent } from './components/pensamentos/mural-pensamentos/mural-pensamentos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    CabecalhoComponent,
    RodapeComponent,
    NovopensamentoComponent,
    MuralPensamentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoteca';
}
