import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento!: IPensamento;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //obtendo o id do pensamento
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

cancelar() {
  this.router.navigate(['']);
}
excluirPensamento() {
  if(this.pensamento.id)
    this.service.excluir(this.pensamento.id).subscribe(() => {
      this.router.navigate([''])
    })
}

}
