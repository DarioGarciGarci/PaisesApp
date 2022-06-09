import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paisesResultado: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) => {
        this.paisesResultado = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.paisesResultado = [];
      }
    });
  }

  sugerencias(termino: string) {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          this.paisesSugeridos = paises.splice(0,5);
        },
        error: (err) => {
          this.paisesSugeridos = [];
        }
      });
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    
  }

}
