import { useEffect, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
  outcome?: 'Win' | 'Lose' | 'Draw';
  handleClose: () => void;
};

function OutcomeModal({ outcome, handleClose }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (outcome !== undefined) {
      ref?.current?.focus();
    }
  }, [outcome]);

  return (
    <Modal show={!!outcome} onHide={handleClose} backdrop={false}>
      <Modal.Header closeButton>
        <Modal.Title>You {outcome}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose} ref={ref}>
          Play again
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OutcomeModal;
