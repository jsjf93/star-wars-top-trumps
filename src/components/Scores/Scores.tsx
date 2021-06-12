type Props = {
  playerScore: number;
  computerScore: number;
};

function Scores({ playerScore, computerScore }: Props) {
  return (
    <div>
      <h2>{`${playerScore} : ${computerScore}`}</h2>
    </div>
  );
}

export default Scores;
