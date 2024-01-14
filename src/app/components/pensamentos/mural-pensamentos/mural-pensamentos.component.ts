import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { BotaoCarregarMaisComponent } from './botao-carregar-mais/botao-carregar-mais.component';

@Component({
  selector: 'app-mural-pensamentos',
  standalone: true,
  imports: [RouterModule, PensamentoComponent, BotaoCarregarMaisComponent],
  templateUrl: './mural-pensamentos.component.html',
  styleUrl: './mural-pensamentos.component.css'
})
export class MuralPensamentosComponent implements OnInit{

  listaPensamentos : Array<IPensamento> = [];
  currentPage: number = 1;
  hasPensamentos: boolean = true;

  constructor(private service: PensamentoService){

  }

  ngOnInit(): void {
    this.service.listar(this.currentPage).subscribe((pensamentoslist)=> {
      this.listaPensamentos = pensamentoslist;
    });
  }

  loadPensamentos() {
    this.currentPage++;
    this.service.listar(this.currentPage).subscribe((pensamentoList) => {
      this.listaPensamentos.push(...pensamentoList);
      if(!pensamentoList.length){
        this.hasPensamentos = false;
      }
    })
    }

}
