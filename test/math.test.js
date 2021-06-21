const { add, subtract } = require( '../math' );

describe( 'all my math tests', () => {
  // make sure that add add properly
  test( 'It does return 5 when I add 2 and 3', () => {
    expect( add( 2, 3 ) ).toBe( 5 );
  } );

  // ???
  test( 'the result must be greater or equal than the first number', () => {
    expect( add( 4, 2 ) ).toBeGreaterThan( 4 );
  } );

  // make sure that subract add properly
  test( 'It does return -1 when I subtract 2 and 3', () => {
    expect( subtract( 2, 3 ) ).toBe( -1 );
  } );

} );