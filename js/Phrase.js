//Phrase class

class Phrase {

  //The phrase parameter is required when creating a new Phrase object
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  //Method to add the phrase to the game display
  addPhraseToDisplay() {
    const list = document.getElementById('phrase').firstElementChild;
    const letters = [];

  //Letters in the phrase are looped through and added one by one to the letters array
    for (let i = 0; i < this.phrase.length; i++) {
      letters.push(this.phrase[i]);
    }

  //Individual letters are added as list items to the HTML and set to hide by default
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === ' ') {
        list.innerHTML += `<li class="space"> </li>`;
      } else {
        list.innerHTML += `<li class="hide letter ${letters[i]}">${letters[i]}</li>`;
      }
    }
  }  

//Method to check whether or not a guessed letter is in the phrase and returns a boolean
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

//Method to loop through HTML letter list items and show them if they match
  showMatchedLetter(letter) {
    const letterListItems = document.querySelector('ul').children;
    for (let i=0; i < letterListItems.length; i++) {
      if (letterListItems[i].textContent === letter) {
        letterListItems[i].className = `show letter ${letter}`;
      }
    }
  }

}
