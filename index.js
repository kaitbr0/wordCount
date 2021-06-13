const express = require('express');
const app = express();
const PORT = 5000;
const morgan = require('morgan');

app.get('/', (req, res) => {
  res.send('hello word count');
});

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./api'));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
