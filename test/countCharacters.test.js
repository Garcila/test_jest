const countCharacter = require( '../countCharacter' )

test( 'if I provide the word unicorn, the answer will be the correct one 🦄', () => {
  const word = 'unicorn';
  expect( countCharacter( word ) ).toEqual( { u: 1, n: 2, i: 1, c: 1, r: 1, o: 1 } );
} );

