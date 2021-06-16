import StarshipCategory from './StarshipCategory/StarshipCategory';
import './StarshipCard.scss';

type Props = {
  name: string;
  starshipClass: string;
  categories: { key: string; value: number; name: string }[];
  handleSelect: (categoryKey: string, value: number) => void;
  isPlayer?: boolean;
};

function StarshipCard({ name, starshipClass, categories, handleSelect, isPlayer }: Props) {
  const handleClick = (categoryKey: string, value: number) => {
    if (isPlayer) {
      handleSelect(categoryKey, value);
    }
  };

  return (
    <div className="starship-card">
      <h2>Name: {name}</h2>
      <h3>Class: {starshipClass}</h3>

      <label htmlFor="categoryList">Choose a category:</label>
      <ul id="categoryList">
        {categories.map((category) => (
          <li key={category.key}>
            <StarshipCategory
              categoryKey={category.key}
              category={category.name}
              value={category.value}
              handleClick={handleClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarshipCard;
