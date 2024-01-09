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

  it('should return correct status when the route is /cart/:id and :id is a number', done => {
    request(url + '/cart/2', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct response when the route is /cart/:id and :id is a number', done => {
    request(url + '/cart/2', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 2');
      done();
    });
  });

  it('should return correct status when the route is /cart/:id and :id is not a number', done => {
    request(url + '/cart/foo', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return correct status when the route is /available_payments', done => {
    request(url + '/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct response when the route is /available_payments', done => {
    request(url + '/available_payments', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });

  it('should return correct status when the route is /login', done => {
    request.post(
      {
        url: url + '/login',
        json: { userName: 'Betty' },
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('should return correct response when the route is /login', done => {
    request.post(
      {
        url: url + '/login',
        json: { userName: 'Betty' },
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
