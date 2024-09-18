const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call utils calculatenumber', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(90, 30);
    sinon.assert(calledWith(spy, 'SUM', 90, 30));
    spy.restore();
  });
});
