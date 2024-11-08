const countWordOccurrences = (sentence: string, word: string): number => {
  let count = 0;
  const sentenceLowerCase = sentence.toLowerCase();
  const wordLowerCase = word.toLowerCase();
  const sentenceArr = sentenceLowerCase.split(/[\s,.;!?]+/);

  console.log(sentenceArr);
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i] === wordLowerCase) {
      count++;
    }
  }
  //   console.log(wordArr);
  return count;
};
