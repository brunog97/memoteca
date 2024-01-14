import { Component, Input } from '@angular/core';
import { IPensamento } from '../../../interfaces/IPensamento';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  // A propriedade pensamento vai receber dados do componente pai
  @Input()
  pensamento!: IPensamento;

  larguraPensamento() : string {
    if(this.pensamento.conteudo.length >= 256)
      return 'pensamento-g'
    else
      return 'pensamento-p'
  }
}

