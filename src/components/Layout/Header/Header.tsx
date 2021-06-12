import { Col, Row } from 'react-bootstrap';
import Scores from '../../Scores/Scores';

import './Header.scss';

type Props = {
  playerScore: number;
  computerScore: number;
};

function Header(props: Props) {
  return (
    <div className="header">
      <Row className="section">
        <Col>
          <h1>Top Trumps</h1>

          <Scores {...props} />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
