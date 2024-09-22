const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

let consoleSpy;

beforeEach(function () {
  consoleSpy = sinon.spy(console, 'log');
});

afterEach(function () {
  consoleSpy.restore();
});

describe('sendPaymentRequestToApi', function () {
  it('should log 120 when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log 20 when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
