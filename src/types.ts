export type FilmConnection = {
  totalCount: number;
};

export type Starship = {
  id: string;
  name: string;
  starshipClass: string;
  mglt: number;
  costInCredits: number;
  passengers: number;
  filmConnection: FilmConnection;
};

export type Starships = {
  starships: Starship[];
};

export type StarshipData = {
  allStarships: Starships;
};
