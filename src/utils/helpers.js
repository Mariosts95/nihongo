// random integer between min and max
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Randomize array element order in-place.
const shuffleArray = (array) => {
  const randomizedArray = [...array];
  for (let i = randomizedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedArray[i], randomizedArray[j]] = [randomizedArray[j], randomizedArray[i]];
  }
  return randomizedArray;
};

export { randomInt, shuffleArray };
