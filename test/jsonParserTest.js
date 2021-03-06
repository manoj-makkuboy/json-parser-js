
var assert = require('assert');
var parsers = require('../jsonParser')

describe('boolean parser', function () {
  it('Should parse true value when to parse string starts with true', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.booleanParser('true123')),
      JSON.stringify({ parsed: true, unParsed: '123', isParsed: true }));
  });

  it('Should parse false value when to parse string starts with false', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.booleanParser('false123')),
      JSON.stringify({ parsed: false, unParsed: '123',isParsed: true }));
  });

  it('Should parse not value', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.booleanParser('tfalse123')),
      JSON.stringify({ parsed: null, unParsed: 'tfalse123', isParsed: false }));
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
  it('Should parse string  part of toBeParsed string that starts with a string and return the remaining string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.stringParser("'abcdd',gjhg")),
      JSON.stringify({ parsed: "abcdd", unParsed: ',gjhg', isParsed: true }));
  });

  it('Should parse not the toBeParsed string if it doesnt start with a string and return the entire string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.stringParser("abcd")),
      JSON.stringify({ parsed: null, unParsed: 'abcd', isParsed: false }));
  });

  it('Should parse the toBeParsed string if it  has numbers inside the string and return the entire string as Parsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.stringParser("'abcd13124'")),
      JSON.stringify({ parsed: "abcd13124", unParsed: '', isParsed: true }));
  });

  it('Should parse the toBeParsed string if it  has numbers inside the string and return the entire string as Parsed', function () {
    assert.equal(JSON.stringify(parsers.unitParsers.stringParser("\"abcd13124\"")),
      JSON.stringify({ parsed: "abcd13124", unParsed: '', isParsed: true }));
  });
})

describe('value parser', function() {
  it('Should parse true value when the value parser starts with true', function(){
    assert.equal(JSON.stringify(parsers.compoundParsers.valueParser("truefalse")),
  JSON.stringify({parsed: true, unParsed:'false', isParsed: true}));
  });

  it('should parse false value when the value parser starts with false', function(){
    assert.equal(JSON.stringify(parsers.compoundParsers.valueParser("false1234")),
  JSON.stringify({parsed: false, unParsed:'1234', isParsed: true}))
  });

  it("should parse null when the value starts with null", function() {
    assert.equal(JSON.stringify(parsers.compoundParsers.valueParser("nulltrue")),
  JSON.stringify({parsed: null, unParsed:'true',isParsed: true}))
  });

  it("should parse string when the value starts with string and return the remaining as unparsed", function() {
    assert.equal(JSON.stringify(parsers.compoundParsers.valueParser("'hello'")),
  JSON.stringify({parsed: 'hello', unParsed:'', isParsed: true}))
  });
})


describe('array parser', function () {
  it('Should parse the given array properly', function () {
    let arrayParserResult = parsers.compoundParsers.arrayParser('[null,true,false,"abcd",1234]')
    assert.equal(arrayParserResult.parsed[0], null)
    assert.equal(arrayParserResult.parsed[1], true)
    assert.equal(arrayParserResult.parsed[2], false)
    assert.equal(arrayParserResult.parsed[3], "abcd")
    assert.equal(arrayParserResult.parsed[4], 1234)
  })

  it('Should return empty parsed array when the input it empty array string', function () {
    let arrayParserResult = parsers.compoundParsers.arrayParser('[]')
    assert.equal(arrayParserResult.parsed.length, 0)
  })
})

describe('object parser', function () {
  it('Should parse the given object properly', function () {
    assert.equal(JSON.stringify(parsers.compoundParsers.objectParser("{'name':'Lopa','age':27}")),
      JSON.stringify({ parsed: {'name':'Lopa','age':27}, unParsed: "", isParsed: true }));
  });

  it('Should return empty parsed object when the input it empty object string', function () {
    let objectParserResult = parsers.compoundParsers.objectParser('{}')
    assert.equal(JSON.stringify(objectParserResult.parsed) === JSON.stringify({}),
    true);
  });
})

describe('json parser', function(){
  it('Should parse string  part of toBeParsed string that starts with a string and return the remaining string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser("'abcdd',gjhg")),
    JSON.stringify({ parsed: "abcdd", unParsed: ',gjhg', isParsed: true }))
  });

  it('Should parse not the toBeParsed string if it doesnt start with a string and return the entire string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser("abcd")),
      JSON.stringify({ parsed: null, unParsed: 'abcd', isParsed: false }));
  });

  it('Should parse the toBeParsed string if it  has numbers inside the string and return the entire string as Parsed', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser("'abcd13124'")),
      JSON.stringify({ parsed: "abcd13124", unParsed: '', isParsed: true }));
  });

  it('Should parse the toBeParsed string if it  has numbers inside the string and return the entire string as Parsed', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser("\"abcd13124\"")),
      JSON.stringify({ parsed: "abcd13124", unParsed: '', isParsed: true }));
  });

  it('Should parse number part of toBeParsed string that starts with a number and return the remaining string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser('12345abcd')),
      JSON.stringify({ parsed: 12345, unParsed: 'abcd', isParsed: true }));
  });

  it('Should not parse the toBeParsed string if it doesnt start with a number and return the entire string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser('abcd1234')),
      JSON.stringify({ parsed: null, unParsed: 'abcd1234', isParsed: false }));
  });

  it('Should not parse the toBeParsed string if it doesnt start with a number and return the entire string as unParsed', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser('ab1234cd')),
      JSON.stringify({ parsed: null, unParsed: 'ab1234cd', isParsed: false }));
  });

  it('Should parse null value and return isParsed as true when to parse string starts with null', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser('null123')),
      JSON.stringify({ parsed: null, unParsed: '123', isParsed: true }));
  });

  it('Should parse not value', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser('tnull')),
      JSON.stringify({ parsed: null, unParsed: 'tnull', isParsed: false }));
  });

  it('Should parse true value when to parse string starts with true', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser('true123')),
      JSON.stringify({ parsed: true, unParsed: '123', isParsed: true }));
  });

  it('Should parse false value when to parse string starts with false', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser('false123')),
      JSON.stringify({ parsed: false, unParsed: '123',isParsed: true }));
  });

  it('Should parse not value', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser('tfalse123')),
      JSON.stringify({ parsed: null, unParsed: 'tfalse123', isParsed: false }));
  });

  it('Should parse the given array properly', function () {
    let arrayParserResult = parsers.jsonParser.jsonParser('[null,false,true]')
    assert.equal(arrayParserResult.parsed[0], null)
    assert.equal(arrayParserResult.parsed[1], false)
    assert.equal(arrayParserResult.parsed[2], true)
  });

  it('Should return empty parsed array when the input it empty array string', function () {
    let arrayParserResult = parsers.jsonParser.jsonParser('[]')
    assert.equal(arrayParserResult.parsed.length, 0)
  });

  it('Should parse the given object properly', function () {
    assert.equal(JSON.stringify(parsers.jsonParser.jsonParser("{'name':'Lopa','age':27}")),
      JSON.stringify({ parsed: {'name':'Lopa','age':27}, unParsed: "", isParsed: true }));
  });

  it('Should return empty parsed object when the input it empty object string', function () {
    let objectParserResult = parsers.jsonParser.jsonParser('{}')
    assert.equal(JSON.stringify(objectParserResult.parsed) === JSON.stringify({}),
    true);
  });
})