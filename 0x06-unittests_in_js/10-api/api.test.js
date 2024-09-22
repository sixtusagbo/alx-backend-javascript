const { expect } = require('chai');
const request = require('request');

const baseUrl = 'http://localhost:7865';

describe('index page', function () {
  it('should return correct status code', (done) => {
    request(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request(`${baseUrl}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  });

  it('should return 404 for invalid endpoint', (done) => {
    request(`${baseUrl}/invalid`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('cart page', () => {
  it('should return correct status when id is a number', (done) => {
    request(`${baseUrl}/cart/3`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct status when id is not a number', (done) => {
    request(`${baseUrl}/cart/a`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return correct result when id is a number', (done) => {
    request(`${baseUrl}/cart/2`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 2');
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('should return the correct status code when input is valid', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'Betty' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct response when input is valid', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'Betty' }
    }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return undefined when input is missing', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: {}
    }, (error, response, body) => {
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });

  it('should return undefined when there\'s json but no userName passed in the request', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { 'foo': 'bar' }
    }, (error, response, body) => {
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  it('should return the correct status code', (done) => {
    request(`${baseUrl}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct response', (done) => {
    request(`${baseUrl}/available_payments`, (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
