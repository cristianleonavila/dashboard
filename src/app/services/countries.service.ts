import { Injectable, signal } from '@angular/core';
import { State } from './state.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  #state = signal<State>({
    loading: false,
    countries: []
  });

  constructor() {
    console.log("Servicio Countries inicializado");

  }
}
