export const generateRandomNumbers = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const arraysAreEqual = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};
