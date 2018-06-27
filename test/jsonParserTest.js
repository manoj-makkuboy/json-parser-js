
var assert = require('assert');
var parsers = require('../jsonParser')

describe('boolean parser', function () {
  it('Should parse true value when to parse string starts with true', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.booleanParser('true123')),
      JSON.stringify({ parsed: true, unParsed: '123' }));
  });

  it('Should parse false value when to parse string starts with false', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.booleanParser('false123')),
      JSON.stringify({ parsed: false, unParsed: '123' }));
  });

  it('Should parse not value', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.booleanParser('tfalse123')),
      JSON.stringify({ parsed: null, unParsed: 'tfalse123' }));
  });

});

describe('comma parser', function () {
  it('remove the comma from index 0', function () {
    let commaParserResult = parsers.unitParsers.commaParser(',test')
    assert.equal(commaParserResult.unParsed, 'test')
  })

  it('return the unparsed string as it is as it is not parseable', function () {
    let commaParserResult = parsers.unitParsers.commaParser('test')
    assert.equal(commaParserResult.unParsed, 'test')
  })
})

describe('colon parser', function () {
  it('remove the colon from index 0', function () {
    let colonParserResult = parsers.unitParsers.colonParser(':test')
    assert.equal(colonParserResult.unParsed, 'test')
  })

  it('return the unparsed string as it is as it is not parseable', function () {
    let colonParserResult = parsers.unitParsers.colonParser('test')
    assert.equal(colonParserResult.unParsed, 'test')
  })
})

describe('array parser', function () {
  it('Should parse the given array properly', function () {
    let arrayParserResult = parsers.compoundParsers.arrayParser('[true,false,true]')
    assert.equal(arrayParserResult.parsed[0], true)
    assert.equal(arrayParserResult.parsed[1], false)
  })

  it('Should return empty parsed array when the input it empty array string', function () {
    let arrayParserResult = parsers.compoundParsers.arrayParser('[]')
    assert.equal(arrayParserResult.parsed.length, 0)
  })
})

