const sinon = require('sinon');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the correct value', function (done) {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.eql({ data: 'Successful response from the API' });
      done();
    });
  });

  it('should do nothing when passed false', function () {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
  });
});
