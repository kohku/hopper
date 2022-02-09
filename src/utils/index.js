export const probability = function(n) {
  return !!n && Math.random() <= n;
};

export const getRandomIntInclusive = (min, max) => {
  const ceil = Math.ceil(min);
  const floor = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (floor - ceil + 1) + ceil); 
};
