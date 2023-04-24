const express = require('express');
const courseRouter = require('./routers/courseRouter');

const app = express();

app.use(express.json());

app.use('/courses', courseRouter);

app.listen(3000, () => console.log('listen on 3000'));
