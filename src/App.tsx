import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import GameArea from './components/Layout/GameArea/GameArea';
import Header from './components/Layout/Header/Header';
import { shuffle } from './helpers/shuffle';
import { Starship, StarshipDataResponse } from './types';

const ALL_STARSHIPS = gql`
  query allStarships {
    allStarships {
      starships {
        id
        name
        starshipClass
        mglt: MGLT
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
  const [scores, setScores] = useState({ playerScore: 0, computerScore: 0 });

  const { loading, error, data } = useQuery<StarshipDataResponse>(ALL_STARSHIPS);

  const handleScoreUpdate = (points: { playerScore: number; computerScore: number }) => {
    setScores({
      playerScore: (scores.playerScore += points.playerScore),
      computerScore: (scores.computerScore += points.computerScore),
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error retrieving data</p>;
  }

  const mappedResponseToType: Starship[] = (data?.allStarships?.starships || []).map(
    (starship) => ({ ...starship, totalCount: starship.filmConnection.totalCount }),
  );

  const starships = shuffle(mappedResponseToType);

  return (
    <Container>
      <Header {...scores} />
      <GameArea
        playerCard={starships[0]}
        computerCard={starships[1]}
        handleScoreUpdate={handleScoreUpdate}
      />
    </Container>
  );
}

export default App;
