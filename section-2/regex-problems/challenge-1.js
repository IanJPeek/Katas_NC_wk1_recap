const extractTotal = codeStrings => {
  // write a function that iterates over a series of line
  // separated strings to find the total of the numbers
  // embedded in each string
  // use the tests to help guide you in your logic

const findNumbers = /\d*/g
const foundNumbers = codeStrings.match(findNumbers);
let sumUp = 0
foundNumbers.map(number => sumUp = sumUp + +number)

return sumUp

};

const removeComments = text => {
  // this function should remove comments
  // from a string of text

  // RE-Examine
//   const findComments = /[//\w]/g
//   const foundComments = text.match(findComments)
// let clipped = text.replace(foundComments, "")
//   console.log(text,"text", foundComments, "comments", clipped, "clipped")
//   return clipped


};

const getIDs = divs => {
  // this function should iterate over an array of html
  // strings in order to extract the id property
  // in each string
};

const collectABs = list => {
  // collect your a s and b 's
  // In this problem, you need to collect all the strings
  // of the form "<number>a<number>b"
  // e.g. "23a56b"
  // you could also have "13a"
  // or you could have "56b"
  // or even just "100"
  // however, any other letters/characters in the string won't be permitted
  // '100c' , '100a2c'
};

module.exports = {
  extractTotal,
  removeComments,
  getIDs,
  collectABs,
};
