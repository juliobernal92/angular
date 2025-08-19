// src/app/pages/matriz/matriz.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Matriz = number[][];

@Component({
  selector: 'app-matriz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent {
  filas: number | null = null;
  columnas: number | null = null;
  matriz: Matriz = [];
  error = '';
  aux =true;

  generar(): void {
    this.error = '';
    if (!this.esValido(this.filas) || !this.esValido(this.columnas)) {
      this.error = 'Ingrese filas y columnas entre 1 y 50.';
      return;
    }
    this.matriz = this.crearMatriz(this.filas!, this.columnas!);
  }

  limpiar(): void {
    this.filas = null;
    this.columnas = null;
    this.matriz = [];
    this.error = '';
    this.aux=true;
  }

  // --- Funciones puras/utilitarias ---
  private esValido(n: number | null): boolean {
    return typeof n === 'number' && n >= 1 && n <= 50 && Number.isInteger(n);
  }

  private crearMatriz(filas: number, cols: number): Matriz {
    const m: Matriz = [];
    for (let i = 0; i < filas; i++) {
      const fila: number[] = [];
      for (let j = 0; j < cols; j++) {
        fila.push(this.randomInt(0, 99)); // rango 0..99
      }
      m.push(fila);
    }
    this.aux=false;
    return m;
  }

  private randomInt(min: number, max: number): number {
    // ambos inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // trackBy para rendimiento en *ngFor
  trackByIndex = (_: number, __: unknown) => _;
}
