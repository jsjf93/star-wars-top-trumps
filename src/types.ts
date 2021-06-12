export type FilmConnection = {
  totalCount: number;
};

export type StarShipResponse = {
  id: string;
  name: string;
  starshipClass: string;
  mglt: number;
  costInCredits: number;
  passengers: number;
  filmConnection: FilmConnection;
};

export type StarshipsResponse = {
  starships: StarShipResponse[];
};

export type StarshipDataResponse = {
  allStarships: StarshipsResponse;
};

export type Starship = {
  id: string;
  name: string;
  starshipClass: string;
  mglt: number;
  costInCredits: number;
  passengers: number;
  totalCount: number;
};
