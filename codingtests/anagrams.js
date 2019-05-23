"use strict";

/**
 * Count the number of anagrams in a list of words.
 *
 * An anagram is a word made up of the same letters as another word in the array (but not
 * necessarily in the same order).
 *
 * I like to think of it like this: Draw a line connecting each pair of words that contain exactly
 * the same letters. For example, with this list of words:
 *
 * TAR RAT BOB ART
 *
 * You would end up with 3 connecting lines (TAR---RAT, TAR---ART, RAT---ART). So the result is 3.
 *
 * @param {string[]} wordsList - The list of words
 *
 * @return {number} The number of words which are anagrams of other words
 */
const countAnagrams = (wordsList) => {
  // Please implement this.
  let count = 0;
  const sortedWordList = [];
  wordsList.forEach((word) => {
    const sortedWord = sortWord(word);
    sortedWordList.push(sortedWord);

  });
  let i, j;
  for (i = 0; i < sortedWordList.length; i++) {
    console.log(sortedWordList[i]);
    for (j = 0; j < sortedWordList.length; j++) {
      if(j!==i){
        if(sortedWordList[i]===sortedWordList[j]){
          count++;
        }
      }
    }

  }

  //  sortedWordList.forEach((word)=>{
  //    console.log(word);
  // })
  return count;
};

const sortWord = (word) => {
  return word.toUpperCase().split("").sort().join("");
}

console.log("Zero:", countAnagrams([]));
console.log("Zero:", countAnagrams(["Top"]));
console.log("Zero:", countAnagrams(["Top", "Spot"]));
console.log("One:", countAnagrams(["Top", "Pot"]));
console.log("Two:", countAnagrams(["Top", "Pot", "Spot", "Stop", "Foo"]));
console.log("Three:", countAnagrams(["Top", "Pot", "Opt"]));
console.log("Nine:", countAnagrams(["Top", "Pot", "Opt", "Spot", "Stop", "Tops", "Opts"]));
