import { gql, useQuery } from '@apollo/client';
import StarshipCard from './components/StarshipCard/StarshipCard';
import { StarshipData } from './types';

const ALL_STARSHIPS = gql`
  query allStarships {
    allStarships {
      starships {
        id
        name
        starshipClass
        MGLT
        costInCredits
        passengers
        filmConnection {
          totalCount
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery<StarshipData>(ALL_STARSHIPS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error retrieving data</p>;
  }

  const starships = data?.allStarships?.starships || [];

  return (
    <div className="App">
      {starships.map((starship) => (
        <StarshipCard key={starship.id} starship={starship} />
      ))}
    </div>
  );
}

export default App;
