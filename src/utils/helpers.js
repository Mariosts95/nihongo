// random integer between min and max
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Randomize array element order in-place.
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export { randomInt, shuffleArray };
