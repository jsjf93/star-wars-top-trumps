import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Starship } from '../../../types';
import OutcomeModal from '../../Modals/OutcomeModal';
import StarshipCard from '../../StarshipCard/StarshipCard';

import './GameArea.scss';

type Props = {
  playerCard: Starship;
  computerCard: Starship;
  handleScoreUpdate: (points: { playerScore: number; computerScore: number }) => void;
};

const categoryOptions = {
  mglt: 'Max speed',
  costInCredits: 'Cost in credits',
  passengers: 'Max passengers',
  totalCount: 'Total count',
};

const getCategories = (starship: Starship) =>
  Object.entries(categoryOptions).map(([key, name]) => ({
    key,
    value: (starship as any)[key],
    name,
  }));

function GameArea({ playerCard, computerCard, handleScoreUpdate }: Props) {
  const [outcome, setOutcome] = useState<'Win' | 'Lose' | 'Draw'>();
  const [roundScore, setRoundScore] = useState({ playerScore: 0, computerScore: 0 });

  const playerCategories = getCategories(playerCard);
  const computerCategories = getCategories(computerCard);

  const handleSelect = (categoryKey: string, value: number) => {
    const computerCategory = computerCategories.find((category) => category.key === categoryKey);

    const playerValue = isNaN(value) ? 0 : +value;
    const computerValue = isNaN(computerCategory?.value) ? 0 : +computerCategory?.value;

    if (playerValue === computerValue) {
      setOutcome('Draw');
      setRoundScore({ playerScore: 0, computerScore: 0 });
    } else if (playerValue < computerValue) {
      setOutcome('Lose');
      setRoundScore({ playerScore: 0, computerScore: 1 });
    } else if (playerValue > computerValue) {
      setOutcome('Win');
      setRoundScore({ playerScore: 1, computerScore: 0 });
    }
  };

  const handleCloseModal = () => {
    setOutcome(undefined);
    handleScoreUpdate(roundScore);
  };

  return (
    <div className="game-area">
      <Row>
        <Col className="game-area__card-column">
          <StarshipCard
            name={playerCard.name}
            starshipClass={playerCard.starshipClass}
            categories={playerCategories}
            handleSelect={handleSelect}
            isPlayer={true}
          />
        </Col>
        {outcome && (
          <Col className="game-area__card-column">
            <StarshipCard
              name={computerCard.name}
              starshipClass={computerCard.starshipClass}
              categories={computerCategories}
              handleSelect={handleSelect}
            />
          </Col>
        )}
      </Row>

      <OutcomeModal outcome={outcome} handleClose={handleCloseModal} />
    </div>
  );
}

export default GameArea;
