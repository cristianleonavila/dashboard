import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '@services/countries.service';
import { TitleComponent } from "@shared/title/title.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-country',
  imports: [TitleComponent],
  templateUrl: './country.component.html',
  styles: ``
})
export default class CountryComponent {

  private route = inject(ActivatedRoute);

  private countryService = inject(CountriesService);

  public country = toSignal(
    this.route.params.pipe(
      switchMap((params) => this.countryService.getCountryByCca3(params['name']))
    )
  );

  public nameAndCc3 = computed(() => `${this.country()?.cca3} - ${this.country()?.name.common}`);

  constructor() {

  }
}
