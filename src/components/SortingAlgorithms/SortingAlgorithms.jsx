export const mergeSortHelper = (a) => {
  if (a.length < 2) return a;
  const middle = Math.floor(a.length / 2);
  const a_l = a.slice(0, middle);
  const a_r = a.slice(middle, a.length);
  const sorted_l = mergeSortHelper(a_l);
  const sorted_r = mergeSortHelper(a_r);

  const c = [];

  while (sorted_l.length && sorted_r.length) {
    c.push(sorted_l[0] > sorted_r[0] ? sorted_r.shift() : sorted_l.shift());
  }

  //if we still have values, let's add them at the end of `c`
  while (sorted_l.length) {
    c.push(sorted_l.shift());
  }
  while (sorted_r.length) {
    c.push(sorted_r.shift());
  }

  return c;
};
