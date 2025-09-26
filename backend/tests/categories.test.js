const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Category = require('../models/Category');
const connectDB = require('../db');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Category.deleteMany({});
  await Category.insertMany([
    { name: 'Obiad' },
    { name: 'Śniadanie' },
    { name: 'Kolacja' },
  ]);
});

test('GET /categories returns all categories', async () => {
  const res = await request(app).get('/categories');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(3);
  expect(res.body[0]).toHaveProperty('name');
});
