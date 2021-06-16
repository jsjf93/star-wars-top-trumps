import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function Help() {
  return (
    <div>
      <Helmet>
        <title>Help</title>
      </Helmet>
      <Container>
        <h2>How to play:</h2>

        <ol>
          <li>A card representing a starship is drawn at random</li>
          <li>
            The player must select a category from the card which is then compared to your
            opponent's card
          </li>
          <li>The player with the greater value wins the round and gains a point</li>
          <li>
            The game ends once all of the cards have been played and the winner is the player with
            the most points
          </li>
        </ol>
      </Container>
    </div>
  );
}

export default Help;
