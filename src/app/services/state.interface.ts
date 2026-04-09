import { CountryResponse } from "../interfaces/countries-response";

export interface State {
  countries: CountryResponse[];
  loading: boolean;
}
