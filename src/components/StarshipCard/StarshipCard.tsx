import { useState } from 'react';
import StarshipCategory from './StarshipCategory';

import './StarshipCard.scss';

type Props = {
  name: string;
  starshipClass: string;
  categories: { key: string; value: number; name: string }[];
  handleSelect: (categoryKey: string, value: number) => void;
};

function StarshipCard({ name, starshipClass, categories, handleSelect }: Props) {
  const [selected, setSelected] = useState<string>();

  const handleClick = (categoryKey: string, value: number) => {
    setSelected(categoryKey);
    handleSelect(categoryKey, value);
  };

  return (
    <div className="starship-card">
      <h2>{name}</h2>
      <h3>Class: {starshipClass}</h3>

      {categories.map((category) => (
        <StarshipCategory
          key={category.key}
          categoryKey={category.key}
          category={category.name}
          value={category.value}
          handleClick={handleClick}
          selected={category.key === selected}
        />
      ))}
    </div>
  );
}

export default StarshipCard;
