'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(sinonChai);
chai.use(chaiAsPromised);

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
        it('should return a promise that is resolved with the match results mapped to an object by using the responder as a template', function () {
          var promise = tokenize(/(.+)=(.+)/, 'k=v', { key: 1, value: 2 });

          expect(promise).to.be.an.instanceOf(Promise);
          expect(promise).to.eventually.deep.equal({ key: 'k', value: 'v' });
        });

      });

      describe('when called without a responder that is an object', function () {
        it('should return a promise that is resolved with the match results', function () {
          var promise = tokenize(/(.+)=(.+)/, 'k=v');

          expect(promise).to.be.an.instanceOf(Promise);
          expect(promise).to.eventually.deep.equal([ 'k=v', 'k', 'v' ]);
        });
      });
    });

    describe('when there is no match', function () {
      it('should return a promise that is rejected without any arguments', function () {
        var promise = tokenize(/(.+)=(.+)/, 'x');

        expect(promise).to.be.an.instanceOf(Promise);
        expect(promise).to.be.rejectedWith();
      });
    });
  });
});
