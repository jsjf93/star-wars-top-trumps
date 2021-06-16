import './StarshipCategory.scss';

type Props = {
  categoryKey: string;
  category: string;
  value: number;
  handleClick: (categoryKey: string, value: number) => void;
};

function StarshipCategory({ categoryKey, category, value, handleClick }: Props) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick(categoryKey, value);
    }
  };

  return (
    <button
      className={`starship-category ${'starship-category--selected'}`}
      onKeyDownCapture={(event) => handleKeyPress(event)}
      onClick={() => handleClick(categoryKey, value)}
    >
      <span>{category}: </span>
      <span>{value || 'n/a'}</span>
    </button>
  );
}

export default StarshipCategory;
