const express = require('express');

//Instantiations
const app = express();

//config
app.disable('case sensitive routing');

//Middleware
//built in
//routting
//application
//error-handling
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  console.log('this middleware always run!');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('in add product middleware!');
  //res.send('the add product page');
  res.send({ title: 'book' });
});

app.use('/product', (req, res, next) => {
  console.log('in product middleware!');
  console.log(req.body);
  //res.send('the add product page');
  res.send('returning of product');
});

app.use('/', (req, res, next) => {
  console.log('in hello middleware!');
  res.send('hello from Express');
});

//error handling
app.use((err, req, res, next) => {
  console.log('Error: ' + err);
  res.send(err);
});

//bootup
app.listen(3000, () => {
  console.log(`The express is started from port 3000`);
});
