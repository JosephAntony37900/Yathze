import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  lanzarDados(cantidad: number): number[] {
    return Array.from({ length: cantidad }, () => Math.floor(Math.random() * 6) + 1);
  }

  calcularPuntaje(dados: number[], objetivo: string): number {
    const contarNumeros = (num: number) => dados.filter(d => d === num).length;

    switch (objetivo) {
      case 'Unos': return contarNumeros(1) * 1;
      case 'Doses': return contarNumeros(2) * 2;
      case 'Treses': return contarNumeros(3) * 3;
      case 'Cuatros': return contarNumeros(4) * 4;
      case 'Cincos': return contarNumeros(5) * 5;
      case 'Seises': return contarNumeros(6) * 6;
      case 'Tres de un tipo':
        return this.verificarMultiples(dados, 3) ? this.sumarDados(dados) : 0;
      case 'Cuatro de un tipo':
        return this.verificarMultiples(dados, 4) ? this.sumarDados(dados) : 0;
      case 'Yatzy (Cinco de un tipo)':
        return this.verificarMultiples(dados, 5) ? 50 : 0;
      case 'Full House':
        return this.verificarFullHouse(dados) ? 25 : 0;
      case 'Secuencia Baja':
        return this.verificarSecuencia(dados, [1, 2, 3, 4, 5]) ? 30 : 0;
      case 'Secuencia Alta':
        return this.verificarSecuencia(dados, [2, 3, 4, 5, 6]) ? 40 : 0;
      default:
        return 0;
    }
  }

  private verificarMultiples(dados: number[], cantidad: number): boolean {
    return dados.some(num => dados.filter(d => d === num).length >= cantidad);
  }

  private verificarFullHouse(dados: number[]): boolean {
    const valoresUnicos = [...new Set(dados)];
    return valoresUnicos.length === 2 && 
      (dados.filter(d => d === valoresUnicos[0]).length === 3 || 
       dados.filter(d => d === valoresUnicos[1]).length === 3);
  }

  private verificarSecuencia(dados: number[], secuencia: number[]): boolean {
    return secuencia.every(num => dados.includes(num));
  }

  private sumarDados(dados: number[]): number {
    return dados.reduce((sum, d) => sum + d, 0);
  }
}
