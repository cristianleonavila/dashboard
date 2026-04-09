export interface CountryResponse {
  population:   number;
  timezones:    string[];
  cca3: string,
  name:         Name;
}

export interface Name {
  common:     string;
  official:   string;
}
