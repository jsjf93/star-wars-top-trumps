import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import GameArea from '../../components/Layout/GameArea/GameArea';
import Scores from '../../components/Scores/Scores';
import { shuffle } from '../../helpers/shuffle';
import { Starship, StarshipDataResponse } from '../../types';
import './Game.scss';

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

function Game() {
  const [scores, setScores] = useState({ playerScore: 0, computerScore: 0 });
  const [usedCardIds, setUsedCardIds] = useState<string[]>([]);

  const { loading, error, data } = useQuery<StarshipDataResponse>(ALL_STARSHIPS);

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

  const getOutcome = () => {
    if (scores.playerScore > scores.computerScore) {
      return 'You win';
    } else if (scores.playerScore < scores.computerScore) {
      return 'You lose';
    } else {
      return 'You draw';
    }
  };

  return (
    <Container className="game">
      <Helmet>
        <title>Game</title>
      </Helmet>
      <main>
        <Scores {...scores} />
        {loading && <p>Loading...</p>}
        {error && <p>Error retrieving data</p>}
        {starships.length ? (
          <GameArea
            playerCard={playerCard}
            computerCard={computerCard}
            handleScoreUpdate={handleScoreUpdate}
          />
        ) : (
          <h2 className="game__paragraph">No more cards. {getOutcome()}</h2>
        )}
      </main>
    </Container>
  );
}

export default Game;
