import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  termino: string = '';

  buscar() {
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe( resp =>{
      console.log(resp);
    });
  }

}
