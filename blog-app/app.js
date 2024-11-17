import express from 'express';
import Blog from './models/blogModel';

const app = express();

app.use(express.json());

export default app;