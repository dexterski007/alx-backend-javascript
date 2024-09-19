const request = require('request');
const { expect } = require('chai');

describe('is index ok ?', () => {
  const apiUrl = 'http://localhost:7865';

  it('correct status', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct content', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('is cart ok ?', () => {
  const apiUrl = 'http://localhost:7865';

  it('correct status', (done) => {
    request.get(`${apiUrl}/cart/21`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct content', (done) => {
    request.get(`${apiUrl}/cart/21`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 21');
      done();
    });
  });

  it('incorrect content', (done) => {
    request.get(`${apiUrl}/cart/str`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
