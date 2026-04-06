import { Injectable, signal } from '@angular/core';
import { State } from './state.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #state = signal<State>({
    loading: false,
    countries: []
  });

  constructor() { }
}
