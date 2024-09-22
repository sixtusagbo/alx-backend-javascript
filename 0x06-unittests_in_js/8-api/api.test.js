const { expect } = require('chai');
const sinon = require('sinon');
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
