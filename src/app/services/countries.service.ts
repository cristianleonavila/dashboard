import { inject, Injectable, signal } from '@angular/core';
import { State } from './state.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private http = inject(HttpClient);

  #state = signal<State>({
    loading: false,
    countries: []
  });

  constructor() {
    this.http.get(`https://restcountries.com/v3.1/region/americas`);
  }
}
