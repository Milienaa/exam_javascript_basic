'use strict'

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

class WordSetCounter extends WordCounter {
    constructor(userString, searchWords) {
      super(userString);
      this.searchWords = searchWords.map(word => word.toLowerCase());
    }
  
    countWordsInSet() {
      const wordSetCount = {};
  
      for (const word of this.searchWords) {
        wordSetCount[word] = this.amountCountWord(word);
      }
  
      return wordSetCount;
    }
}
  
const userString = "В лісовій хатинці, що у лісі є невеличка пічка або пічечка, як каже лісовий";
const searchWords = ["ліс", "піч"];
const wordSetCounter = new WordSetCounter(userString, searchWords);
const wordSetCount = wordSetCounter.countWordsInSet();
  
for (const word in wordSetCount) {
    console.log(`Слово "${word}" зустрічається в тексті ${wordSetCount[word]} разів.`);
}