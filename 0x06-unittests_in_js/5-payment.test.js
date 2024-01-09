const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

let consoleSpy;

beforeEach(() => {
  consoleSpy = sinon.spy(console, 'log');
});

afterEach(() => {
  sinon.restore();
});

describe('sendPaymentRequestToApi', () => {
  it('call sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
