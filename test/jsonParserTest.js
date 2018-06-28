
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

describe('null parser', function(){
  it('Should parse null value and return isParsed as true when to parse string starts with null', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.nullParser('null123')),
      JSON.stringify({ parsed: null, unParsed: '123', isParsed: true }));
  });

  it('Should parse not value', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.nullParser('tnull')),
      JSON.stringify({ parsed: null, unParsed: 'tnull', isParsed: false }));
  });
})

describe('number parser', function(){
  it('Should parse number part of toBeParsed string that starts with a number and return the remaining string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.numberParser('12345abcd')),
      JSON.stringify({ parsed: 12345, unParsed: 'abcd', isParsed: true }));
  });

  it('Should not parse the toBeParsed string if it doesnt start with a number and return the entire string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.numberParser('abcd1234')),
      JSON.stringify({ parsed: null, unParsed: 'abcd1234', isParsed: false }));
  });

  it('Should not parse the toBeParsed string if it doesnt start with a number and return the entire string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.numberParser('ab1234cd')),
      JSON.stringify({ parsed: null, unParsed: 'ab1234cd', isParsed: false }));
  });
})

describe('string parser', function(){
  it('Should parse number part of toBeParsed string that starts with a number and return the remaining string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.stringParser("'abcdd',gjhg")),
      JSON.stringify({ parsed: 'abcdd', unParsed: ',gjhg', isParsed: true }));
  });

  it('Should parse not the toBeParsed string if it doesnt start with a number and return the entire string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.numberParser("abcd")),
      JSON.stringify({ parsed: null, unParsed: 'abcd', isParsed: false }));
  });
})

