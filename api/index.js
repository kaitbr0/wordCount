const router = require('express').Router();
const {
  wordCount,
  charCount,
  sentenceCount,
  paragraphCount,
  bigrams,
} = require('../util.js');
router.get('/word', (req, res, next) => {
  let { text } = req.body;
  if (text) {
    try {
      let count = wordCount(text);
      res.send(`Word Count: ${count}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send('attach some text to the request body');
  }
});
router.get('/char', (req, res, next) => {
  let { text } = req.body;
  if (text) {
    try {
      let count = charCount(text);
      res.send(`Character Count: ${count}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send('attach some text to the request body');
  }
});
router.get('/sentence', (req, res, next) => {
  let { text } = req.body;
  if (text) {
    try {
      let count = sentenceCount(text);
      res.send(`Sentence Count: ${count}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send('attach some text to the request body');
  }
});
router.get('/paragraph', (req, res, next) => {
  let { text } = req.body;
  if (text) {
    try {
      let count = paragraphCount(text);
      res.send(`Paragraph Count: ${count}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send('attach some text to the request body');
  }
});
router.get('/bigrams', (req, res, next) => {
  let { text } = req.body;
  if (text) {
    try {
      let count = bigrams(text);

      res.send(`Bigrams: ${count}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send('attach some text to the request body');
  }
});

module.exports = router;
