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

describe('is available payments ok ?', () => {
  const apiUrl = 'http://localhost:7865';

  it('correct status', (done) => {
    request.get(`${apiUrl}/available_payments`, {json: true}, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct content', (done) => {
    request.get(`${apiUrl}/available_payments`, (error, response, body) => {
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

describe('is login ok ?', () => {
  const reqbody = {
    url: 'http://localhost:7865/login',
    json: true,
    body: { userName: 'Holberton' }
  };
  const wrongreq = {
    url: 'http://localhost:7865/login',
    json: true,
    body: { usr: 'Holberton' }
  };

  it('correct status', (done) => {
    request.post(reqbody, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct content', (done) => {
    request.post(reqbody, (error, response, body) => {
      expect(body).to.equal('Welcome Holberton');
      done();
    });
  });

  it('incorrect content', (done) => {
    request.post(wrongreq, (error, response, body) => {
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});
