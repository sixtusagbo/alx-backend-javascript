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
