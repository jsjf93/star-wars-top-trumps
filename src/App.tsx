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
  const [usedCardIds, setUsedCardIds] = useState<string[]>([]);

  const { loading, error, data } = useQuery<StarshipDataResponse>(ALL_STARSHIPS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error retrieving data</p>;
  }

  const mappedResponseToType: Starship[] = (data?.allStarships?.starships || []).map(
    (starship) => ({ ...starship, totalCount: starship.filmConnection.totalCount }),
  );

  const starships = shuffle(mappedResponseToType).filter(
    (starship) => !usedCardIds.includes(starship.id),
  );

  const [playerCard, computerCard] = [starships[0], starships[1]];

  const handleScoreUpdate = (points: { playerScore: number; computerScore: number }) => {
    setScores({
      playerScore: (scores.playerScore += points.playerScore),
      computerScore: (scores.computerScore += points.computerScore),
    });

    setUsedCardIds([...usedCardIds, playerCard.id, computerCard.id]);
  };

  return (
    <Container className="app">
      <Header {...scores} />
      {starships.length ? (
        <GameArea
          playerCard={playerCard}
          computerCard={computerCard}
          handleScoreUpdate={handleScoreUpdate}
        />
      ) : (
        <p className="app__paragraph">No more cards. Game over</p>
      )}
    </Container>
  );
}

export default App;
