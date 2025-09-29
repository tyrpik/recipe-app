import express from 'express';
import categoriesRoutes from './routes/categories.js';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

export default app;
