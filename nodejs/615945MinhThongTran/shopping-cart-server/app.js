const express = require('express');
const loginRouter = require('./routers/loginRouter');
const productRouter = require('./routers/productRouter');
const shoppingCartRouter = require('./routers/shoppingCartRouter');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/shoppingcarts', shoppingCartRouter);

//error handling
app.use((err, req, res, next) => {
  res.status(500).json(err.message);
});

app.listen(5000, () => console.log('App is running on port 5000!'));
