const { expect } = require('chai');
const request = require('request');
const url = 'http://localhost:7865';

describe('Index page', () => {
  it('correct status code', done => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct response', done => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('404 status code', done => {
    request(url + '/not_found', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
