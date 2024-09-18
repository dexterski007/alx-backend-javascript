const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should call utils calculatenumber', function() {
    sendPaymentRequestToApi(90, 30);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 90, 30)).to.be.true;
  });

  it('should log the correct total', function() {
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(90, 30);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    consoleSpy.restore();
  });
});
