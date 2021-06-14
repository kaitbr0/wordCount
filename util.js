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
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  });
  let obj = {};
  //add logic to map memo here
  return obj;
}

module.exports = {
  wordCount,
  charCount,
  sentenceCount,
  paragraphCount,
  bigrams,
};
