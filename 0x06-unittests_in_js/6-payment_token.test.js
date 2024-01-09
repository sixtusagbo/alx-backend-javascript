const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('resolves with success and returns object when called with true', done => {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch(error => {
        done(error);
      });
  });
});
