import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private filtros: string = '?fields=name,capital,population,flags,altSpellings';

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,population,flags,altSpellings');
  }

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>  {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>(url, { params: this.httpParams});
  }

  buscarPaisByCapital(termino: string): Observable<Country[]>  {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url, { params: this.httpParams});
  }

  getPaisByCodigo(codigoPais: string): Observable<Country>  {
    const url = `${ this.apiUrl }/alpha/${ codigoPais }`;
    return this.http.get<Country>(url);
  }

  getPaisesRegion(region: string): Observable<Country[]>  {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>(url, { params: this.httpParams})
      .pipe(
        tap(console.log)
      );
  }

}
