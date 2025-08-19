import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Noticia = {
  titulo: string;
  contenido: string;
  fecha: string; // ISO (YYYY-MM-DD) o full ISO
};

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  // Filtros (ligados al template con ngModel)
  desde?: string;  // 'YYYY-MM-DD'
  hasta?: string;  // 'YYYY-MM-DD'
  busqueda = '';   // texto libre opcional

  // Noticias con fecha en ISO
  noticias: Noticia[] = [
    { titulo: 'Angular 19 lanzado', contenido: 'Incluye mejoras en rendimiento y soporte extendido.', fecha: '2024-11-19' },
    { titulo: 'Node 22 ahora compatible', contenido: 'Angular 19 ahora soporta oficialmente Node 22.x.', fecha: '2025-02-10' },
    { titulo: 'TypeScript 5.9 disponible', contenido: 'Nuevas características de tipado y rendimiento.', fecha: '2025-07-28' },
    { titulo: 'Angular 20 publicado', contenido: 'Nuevas APIs y mejoras de DX.', fecha: '2025-05-28' },
    { titulo: 'RxJS 7.8.x actualizaciones', contenido: 'Correcciones y pequeñas mejoras.', fecha: '2025-03-15' },
    { titulo: 'Angular Signals adoptados ampliamente', contenido: 'Patrones reactivos simplificados.', fecha: '2025-01-20' },
    { titulo: 'CLI: mejoras en build incremental', contenido: 'Compilaciones más rápidas.', fecha: '2025-06-12' },
    { titulo: 'ES2025 aprobado', contenido: 'Nuevas features del estándar ECMAScript.', fecha: '2025-06-20' },
    { titulo: 'Compatibilidad Node 24 en Angular 20', contenido: 'Rango ampliado de runtimes.', fecha: '2025-06-30' },
    { titulo: 'Material v17: temas y tokens', contenido: 'Sistema de theming más flexible.', fecha: '2025-04-05' },
  ];

  // Getter con el filtrado + orden
  get noticiasFiltradas(): Noticia[] {
    const d = this.desde ? new Date(this.desde) : null;
    const h = this.hasta ? new Date(this.hasta) : null;
    const q = this.busqueda.trim().toLowerCase();

    return this.noticias
      .filter(n => {
        const f = new Date(n.fecha);
        const okDesde = d ? f >= d : true;
        const okHasta = h ? f <= h : true;
        const okTexto = q
          ? n.titulo.toLowerCase().includes(q) || n.contenido.toLowerCase().includes(q)
          : true;
        return okDesde && okHasta && okTexto;
      })
      .sort((a, b) => +new Date(b.fecha) - +new Date(a.fecha)); // más nuevas primero
  }
}
