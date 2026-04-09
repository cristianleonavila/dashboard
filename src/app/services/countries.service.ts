import { computed, inject, Injectable, signal } from '@angular/core';
import { State } from './state.interface';
import { HttpClient } from '@angular/common/http';
import { CountryResponse } from '../interfaces/countries-response';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private http = inject(HttpClient);

  public users = computed(() => this.#state().countries);
  public loading = computed(() => this.#state().loading);

  #state = signal<State>({
    loading: true,
    countries: []
  });

  constructor() {
    this.http.get<CountryResponse[]>(`https://restcountries.com/v3.1/region/americas`)
    .pipe(
      delay(3000),
      map(countries => countries.map(country => ({
        population: country.population,
        name: country.name,
        timezones: country.timezones,
        cca3: country.cca3
      })))
    ).subscribe(data => this.#state.set({
      loading: false,
      countries: data
    }));
  }

  getCountryByCca3(cca3:string) {
    return this.http.get<CountryResponse[]>(`https://restcountries.com/v3.1/alpha/${cca3}`)
    .pipe(
      map(countries => countries[0]),
      map((country) => ({
        population: country.population,
        name: country.name,
        timezones: country.timezones,
        cca3: country.cca3
      }) as CountryResponse)
    );
  }
}
