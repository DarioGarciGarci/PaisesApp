import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paisesResultado: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) => {
        console.log(paises);
        this.paisesResultado = paises;
      },
      error: (err) => {
        this.hayError = true;
        console.log('Error');
        console.info(err);
        this.paisesResultado = [];
      }
    });
  }

}
