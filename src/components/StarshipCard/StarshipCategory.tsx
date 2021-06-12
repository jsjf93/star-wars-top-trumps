type Props = {
  categoryKey: string;
  category: string;
  value: number;
  handleClick: (categoryKey: string, value: number) => void;
  selected: boolean;
};

function StarshipCategory({ categoryKey, category, value, handleClick, selected }: Props) {
  return (
    <div
      className={`starship-card__category ${selected ? 'starship-card__category--selected' : ''}`}
      onClick={() => handleClick(categoryKey, value)}
    >
      <span>{category}: </span>
      <span>{value || 'n/a'}</span>
    </div>
  );
}

export default StarshipCategory;
