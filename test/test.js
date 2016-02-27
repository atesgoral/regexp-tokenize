'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);

var expect = chai.expect;

var tokenize = require('../index');

describe('regexp-tokenize', function () {
  it('should be a function', function () {
    expect(tokenize).to.be.a.function;
  });

  describe('when called with a responder that is a callback function', function () {
    describe('when there is a match', function () {
      it('should call the callback with the match results as arguments', function () {
        var callback = sinon.spy();

        tokenize(/(.+)=(.+)/, 'k=v', callback);

        expect(callback).to.have.been.calledWith('k=v', 'k', 'v');
      });
    });

    describe('when there is no match', function () {
      it('should not call the callback', function () {
        var callback = sinon.spy();

        tokenize(/(.+)=(.+)/, 'x', callback);

        expect(callback).to.not.have.been.called;
      });
    });
  });

  describe('when called without a responder that is a callback function', function () {
    describe('when there is a match', function () {
      describe('when called with a responder that is an object', function () {

      });

      describe('when called without a responder that is an object', function () {

      });
    });

    describe('when there is no match', function () {
      it('should return a rejected promise', function () {

      });
    });
  });
});
