import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent  {
  pensamento!: IPensamento ;

  constructor(private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute){
      const id = this.route.snapshot.paramMap.get('id');
      if(id != null)
        this.service.buscarPorId(parseInt(id)).subscribe((pensamento)=>{
          this.pensamento = pensamento;
        })

    }
editarPensamento() {
this.service.editar(this.pensamento).subscribe(()=>{
  this.router.navigateByUrl("");
})
}
cancelar() {
  this.router.navigateByUrl("");
}

}
