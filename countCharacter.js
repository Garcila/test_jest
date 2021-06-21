function countCharacter ( string ) {
  let myObject = {};

  for ( let letter of string ) {
    // if the myObject contains the letter, add to the count
    if ( myObject[letter] ) {
      myObject[letter]++;
    } else {
      // else add the letter to the object and start the count at 1
      myObject[letter] = 1;
    }
  }
  return myObject;
}

module.exports = countCharacter;
