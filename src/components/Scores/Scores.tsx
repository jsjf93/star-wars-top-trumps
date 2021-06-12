type Props = {
  playerScore: number;
  computerScore: number;
};

function Scores({ playerScore, computerScore }: Props) {
  return <div>{`${playerScore} : ${computerScore}`}</div>;
}

export default Scores;
