function wordCount(textBody) {
  let count = 1;
  for (let i = 0; i < textBody.length; i++) {
    if (textBody[i] === ' ') {
      count++;
    }
  }
  return count;
}
function charCount(textBody) {
  let count = 0;
  for (let i = 0; i < textBody.length; i++) {
    if (textBody[i] !== ' ') {
      count++;
    }
  }
  return count;
}

function sentenceCount(textBody) {
  let count = 0;
  let punctuation = ['.', '!', '?'];
  for (let i = 0; i < textBody.length; i++) {
    if (punctuation.includes(textBody[i])) {
      if (textBody[i + 1] == ' ' || i === textBody.length - 1) count++;
    }
  }
  return count;
}

function paragraphCount(textBody) {
  let arr = textBody.split('\n');
  let count = arr.reduce((prev, curr) => {
    if (curr.length > 1) {
      prev++;
    }
    return prev;
  }, 0);
  return count;
}

function bigrams(textBody) {
  let arr = textBody.split(' ');
  var punctuationless = arr.map((word) => {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
  });
  let obj = {};
  for (let i = 0; i < punctuationless.length - 1; i++) {
    let first = punctuationless[i];
    let second = punctuationless[i + 1];
    let tuple = [first, second];
    if (!obj[tuple]) {
      obj[tuple] = 1;
    } else {
      obj[tuple]++;
    }
  }
  return obj;
}

function readingLevel(textBody) {
  let L,
    S,
    index = 0.0;
  let numWords = wordCount(textBody);
  let numSentences = sentenceCount(textBody);
  textBody = textBody.replace(/[.,\/#!$%\^'&\*;:{}=\-_`~()]/g, '');
  //stripped out the punctuation here for the letter count
  let numLetters = charCount(textBody);
  L = (numLetters / numWords) * 100;
  S = (numSentences / numWords) * 100;
  console.log(L, S);
  // this uses the Coleman-Liau index to calculate the reading level of a body of text
  // I learned this from the Harvard CS-50 course
  // It was taught to me in C but works in JS here
  index = 0.0588 * L - 0.296 * S - 15.8;
  let res = Math.round(index);

  return res > 16 ? 'Grade 16+' : res < 1 ? 'Before grade 1' : `Grade ${res}`;
}

module.exports = {
  wordCount,
  charCount,
  sentenceCount,
  paragraphCount,
  bigrams,
  readingLevel,
};
