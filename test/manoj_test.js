
var assert = require('assert');
var parsers = require('../manoj/jsonParser')

describe('boolean parser', function () {
  it('Should parse true value when to parse string starts with true', function () {
    assert.equal(JSON.stringify(parsers.parsers.booleanParser('true123')),
      JSON.stringify({ parsed: true, unParsed: '123' }));
  });

  it('Should parse false value when to parse string starts with false', function () {
    assert.equal(JSON.stringify(parsers.parsers.booleanParser('false123')),
      JSON.stringify({ parsed: false, unParsed: '123' }));
  });

  it('Should parse not value', function () {
    assert.equal(JSON.stringify(parsers.parsers.booleanParser('tfalse123')),
      JSON.stringify({ parsed: null, unParsed: 'tfalse123' }));
  });

});

