const getLastElement = arr => {
  // should return the last item in a given array
  const lastItem = arr[arr.length - 1];
  return lastItem;
};

const getOuterSum = arr => {
  // should return the outer sum of a given arr
  // e.g. [10] should return 10
  // e.g. [10,5] should return 15
  // e.g. [40,3,2] should return 42
  // e.g. [3,4,5,6,1,7] should return 10

  if (arr.length === 1) return arr[0];
  else return arr[0] + arr[arr.length - 1];
};

const getAnyItem = (arr, position) => {
  // given an arr and a position returns an item at that position in the arr
  // if index is greater than or equal to arr length it should go back round again
  // e.g. getAnyItem(['a','b','c'], 0) should return 'a'
  // e.g. getAnyItem(['a','b','c'], 1) should return 'b'
  // e.g. getAnyItem(['a','b','c'], 3) should return 'a'
  // e.g. getAnyItem(['a','b','c'], 5) should return 'c' etc...

  const remainder = position % arr.length;
  return arr[remainder];
};

const getMiddle = arr => {
  // returns the middle item in an array for arr of odd length
  // returns the middle two items in an array for arr of even length
  // e.g. getMiddle(['a']) // should return 'a'
  // e.g. getMiddle([42, 20, 13, 6]) // should return [20, 13]
  // e.g. getMiddle([42, 20, 13, 6, 100]) // should return [13]

  //ODD single middle in an array
  if (arr.length % 2 === 1) {
    return [arr[(arr.length - 1) / 2]];
  }

  //EVEN pair of middles in array
  if (arr.length % 2 === 0) {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  }
};

module.exports = {
  getLastElement,
  getOuterSum,
  getAnyItem,
  getMiddle
};
