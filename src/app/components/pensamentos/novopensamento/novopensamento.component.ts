import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-novopensamento',
  standalone: true,
  imports: [FormsModule,
  ReactiveFormsModule,
NgClass],
  templateUrl: './novopensamento.component.html',
  styleUrl: './novopensamento.component.css'
})
export class NovopensamentoComponent {

  constructor(
    private router: Router,
    private service:PensamentoService,
    private formBuilder: FormBuilder // resp pela construção do formulario
  ){
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([Validators.required/*, Validators.pattern("/(.|\s)*\S(.|\s)")*/])],
      autoria: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      modelo: 'modelo1'
    })
  }



  formulario!: FormGroup;

  criarPensamento() : void {

    if(this.formulario.valid)
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['']);
      });
  }

  cancelar() : void {
    var isCancelado = confirm("Cancelar ação?!");
    if (isCancelado)
        this.router.navigate(['']);
  }


statusBotao(): any{
  if(this.formulario.valid)
    return "botao"
  else
    return "botao__desabilitado"
}

}
