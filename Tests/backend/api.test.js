// backend/api.test.js
const request = require('supertest');

const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('GET /posts', () => {
  it('should return a list of posts', async () => {
    const response = await request(baseUrl).get('/posts');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
