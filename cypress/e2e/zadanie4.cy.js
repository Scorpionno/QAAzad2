describe('HTTPBin API Tests', () => {
  // Test 1: GET request
  it('should make a GET request', () => {
    cy.request('GET', 'https://httpbin.org/get')
      .its('status')
      .should('eq', 200);
  });

  // Test 2: POST request with form data
  it('should make a POST request with form data', () => {
    const formData = {
      field1: 'value1',
      field2: 'value2',
    };

    cy.request('POST', 'https://httpbin.org/post', formData)
      .its('status')
      .should('eq', 200);
  });

  // Test 3: Send query parameters
  it('should send query parameters in the request', () => {
    const params = {
      param1: 'value1',
      param2: 'value2',
    };

    cy.request('GET', 'https://httpbin.org/get', { qs: params })
      .its('status')
      .should('eq', 200);
  });

  // Test 4: Send random query parameters
  it('should send random query parameters in the request', () => {
    const randomParam = Math.random().toString(36).substring(7);
    const params = {
      randomParam,
    };

    cy.request('GET', 'https://httpbin.org/get', { qs: params })
      .its('status')
      .should('eq', 200);
  });

  // Test 5: Send a POST request with JSON body
  it('should make a POST request with JSON body', () => {
  const requestBody = {
    key1: 'value1',
    key2: 'value2',
  };

  cy.request('POST', 'https://httpbin.org/post', requestBody)
    .its('body.json')
    .should('deep.equal', requestBody);
  });

  // Test 6: Check response duration
  it('should check response duration', () => {
    cy.request('GET', 'https://httpbin.org/delay/2')
      .its('duration')
      .should('be.gte', 2000); // dilej 2(?)
  });

  // Test 7: PUT request
  it('should make a PUT request', () => {
    cy.request('PUT', 'https://httpbin.org/put')
      .its('status')
      .should('eq', 200);
  });

  // Test 8: DELETE request
  it('should make a DELETE request', () => {
    cy.request('DELETE', 'https://httpbin.org/delete')
      .its('status')
      .should('eq', 200);
  });

  // Test 9: PATCH request
  it('should make a PATCH request', () => {
    cy.request('PATCH', 'https://httpbin.org/patch')
      .its('status')
      .should('eq', 200);
  });

  // Test 10: HEAD request
  it('should make a HEAD request', () => {
    cy.request('HEAD', 'https://httpbin.org/status/200')
      .its('status')
      .should('eq', 200);
  });

});
// wszystko pass