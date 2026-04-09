import { Component, inject } from '@angular/core';
import { CountriesService } from '@services/countries.service';
import { TitleComponent } from "@shared/title/title.component";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-countries',
  imports: [TitleComponent, RouterLink],
  templateUrl: './countries.component.html'
})
export default class CountriesComponent {

  public countriesService = inject(CountriesService);

  constructor() {

  }
}
