QUnit.module( "Simple Numerical Substitution Cipher" );

QUnit.test( "Encrypt: test", function( assert ) {
  assert.equal( "20 5 19 20",  snscEncryptHelper("test"));
});

QUnit.test( "Encrypt: david", function( assert ) {
    assert.equal( "4 1 22 9 4",  snscEncryptHelper("david"));
});
  
QUnit.test( "Encrypt: David", function( assert ) {
    assert.equal( "4 1 22 9 4",  snscEncryptHelper("David"));
});
  
QUnit.test( "Encrypt: David Condon", function( assert ) {
    assert.equal( "4 1 22 9 4   3 15 14 4 15 14",  snscEncryptHelper("David Condon"));
});
  
QUnit.test( "Encrypt: Empty String", function( assert ) {
    assert.equal( "",  snscEncryptHelper(""));
});

QUnit.test( "Encrypt: Full stop", function( assert ) {
    assert.equal( ".",  snscEncryptHelper("."));
});

QUnit.test( "Encrypt: Invalid Character", function( assert ) {
    assert.equal( "-1 -1 -1 -1 -1",  snscEncryptHelper("£$%^&"));
});