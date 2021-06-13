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

module.exports = {
  wordCount,
  charCount,
  sentenceCount,
  paragraphCount,
};
