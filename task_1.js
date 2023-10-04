'use strict';

class WordCounter {
  constructor(userString) {
    this.userString = userString.toLowerCase();
    this.wordCount = {};
    this.points = [" ", ",", ".", "!", "?", ";", ":", "-", "_", "'", '"', "(", ")", "[", "]", "{", "}"];
  }

  amountCountWord(word) {
    this.wordCount[word] = 0;
    const words = this.userString.split(' ');
    
    for (const userWord of words) {
      const cleanedUserWord = this.cleanWord(userWord);
      if (cleanedUserWord.includes(word.toLowerCase())) {
        this.wordCount[word]++;
      }
    }
    
    return this.wordCount[word];
  }

  cleanWord(word) {
    let cleanedWord = '';
    for (const char of word) {
      if (!this.points.includes(char)) {
        cleanedWord += char;
      }
    }
    return cleanedWord;
  }
}

const userString = "В лісовій хатинці, що у лісі є невеличка пічка";
const wordCounter = new WordCounter(userString);
const searchWord = "ліс";
const amountWord = wordCounter.amountCountWord(searchWord);

console.log(`Слово "${searchWord}" зустрічається в тексті ${amountWord} разів.`);