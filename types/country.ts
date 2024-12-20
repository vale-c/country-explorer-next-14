export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
  };
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  borders?: string[];
  timezones?: string[];
  osmId?: string;
  latlng?: [number, number];
  landlocked: boolean;
  car?: {
    side: string;
  };
  tld?: string[];
  qualityOfLife?: QualityOfLife;
  capitalInfo?: {
    latlng: [number, number];
  };
  economyOverview?: string;
}

export interface QualityOfLife {
  education: number;
  overall: number;
  costOfLiving?: number;
  healthcare: number;
  internetSpeed?: number;
  gdpPerCapita: number;
  lifeExpectancy: number;
}
