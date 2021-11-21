import express from 'express';
import winston from 'winston';
import { setupRoute } from './routes.js';

import sum from './sum.js';

const app = express();
const port = 3000;

setupRoute(app);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/coverage', express.static('coverage/lcov-report'));

winston.log('Sum of 1+2', sum(1, 2));
app.listen(port, () => {
  winston.info(`Example app listening at http://localhost:${port}`);
});
