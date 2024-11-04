import { Component } from '@angular/core';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  dados: number[] = [0, 0, 0, 0, 0]; // Representación de 5 dados
  objetivosMenores = ['Unos', 'Doses', 'Treses', 'Cuatros', 'Cincos', 'Seises'];
  objetivosMayores = [
    'Tres de un tipo',
    'Cuatro de un tipo',
    'Yatzy (Cinco de un tipo)',
    'Full House',
    'Secuencia Baja',
    'Secuencia Alta'
  ];
  objetivoSeleccionado: string = '';

  constructor(private juegoService: JuegoService) {}

  lanzarDados() {
    this.dados = this.juegoService.lanzarDados(5);
  }

  seleccionarObjetivo(objetivo: string) {
    this.objetivoSeleccionado = objetivo;
    const puntaje = this.juegoService.calcularPuntaje(this.dados, objetivo);
    alert(`Objetivo: ${objetivo}\nPuntaje: ${puntaje}`);
  }
}
