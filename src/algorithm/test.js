function betterCompression(text) {
  const words = [...text];
  let numberString = '';
  let wordString = '';
  let obj = {};
  for (let word of words) {
    if (word >= 'a' && word <= 'z') {
      if (wordString.length > 0) {
        obj[wordString].value += parseInt(numberString);
        numberString = '';
        wordString = '';
      }
      wordString = word;
      if (!obj[word]) {
        obj[word] = {};
        obj[word].word = word;
        obj[word].value = 0;
      }
    } else {
      numberString += word;
    }
  }
  if (wordString.length > 0) {
    obj[wordString].value += parseInt(numberString);
    numberString = '';
    wordString = '';
  }
  let keySorted = Object.keys(obj).sort(function(a, b) {
    return obj[a].word > obj[b].word;
  });
  let resultString = '';
  for (let key of keySorted) {
    resultString += obj[key].word || '';
    resultString += obj[key].value || '';
  }
  return resultString;
}

// console.log(betterCompression('a1b22c'));s

const list = ['bcbb', 'bacc', 'aaa'];
function sortList(list) {
  let newList = list.sort();
  console.log(newList);
}

sortList(list);
