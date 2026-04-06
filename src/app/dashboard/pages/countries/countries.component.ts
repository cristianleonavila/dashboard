import { Component, inject } from '@angular/core';
import { CountriesService } from '@services/countries.service';


@Component({
  selector: 'app-countries',
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export default class CountriesComponent {

  public countriesService = inject(CountriesService);
}
