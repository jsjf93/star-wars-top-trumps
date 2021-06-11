// Fisher-Yates shuffle
export function shuffle<T>(array: T[]) {
  const newArray = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * i);

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
