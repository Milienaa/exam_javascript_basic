'use strict'

class Text {
  constructor(userString, searchWords, replaceWords) {
    this.userString = userString;
    this.searchWords = searchWords;
    this.replaceWords = replaceWords;
    this.replacements = 0;
  }

  getReplace() {
    let newString = this.userString;
    for (let i = 0; i < this.searchWords.length; i++) {
      const searchWord = this.searchWords[i];
      const replaceWord = this.replaceWords[i];
      const words = newString.split(" ");
      for (let j = 0; j < words.length; j++) {
        if (words[j].toLowerCase() === searchWord.toLowerCase()) {
          if (words[j] === searchWord) {
            words[j] = replaceWord;
          } else {
            words[j] = replaceWord.charAt(0).toUpperCase() + replaceWord.slice(1);
          }
          this.replacements++;
        }
      }
      newString = words.join(" ");
    }
    return newString;
  }

  replacementStat() {
    return `Здійснено ${this.replacements} замін(и).`;
  }
}

const userString = "Cat runs. Dog runs. Cat jumps.";
const searchWords = ["cat", "dog"];
const replaceWords = ["bird", "fish"];

const textProcessor = new Text(userString, searchWords, replaceWords);
const newString = textProcessor.getReplace();

console.log("Текст до:\n" + userString);
console.log("Текст після:\n" + newString);
console.log("" + textProcessor.replacementStat());