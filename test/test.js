'use strict';

var expect = require('chai').expect;

var tokenize = require('../index');

describe('regexp-tokenize', function () {
  it('should be a function', function () {
    expect(tokenize).to.be.a.function;
  });
});
