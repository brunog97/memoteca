import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  standalone: true,
  imports: [],
  templateUrl: './botao-carregar-mais.component.html',
  styleUrl: './botao-carregar-mais.component.css'
})
export class BotaoCarregarMaisComponent {

  @Input()
  hasPensamentos: boolean = false;



}
