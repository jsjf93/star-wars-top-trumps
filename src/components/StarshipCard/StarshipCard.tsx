import { Starship } from '../../types';

type Props = {
  starship: Starship;
};

function StarshipCard({ starship }: Props) {
  return (
    <div key={starship.id}>
      <h2>{starship.name}</h2>

      <p>Class: {starship.starshipClass}</p>
      <p>Max speed: {starship.mglt}</p>
      <p>Cost in credits: {starship.costInCredits}</p>
      <p>Max passengers: {starship.passengers}</p>
      <p>Total films featuring ship: {starship.filmConnection.totalCount}</p>
    </div>
  );
}

export default StarshipCard;
