let input = document.querySelector(".input");
let character = document.querySelector(".character");
let word = document.querySelector(".word");
let WORD_LIMIT = 10;

input.addEventListener("keyup",countCharacters);
input.addEventListener("keyup",countWords);

function countCharacters(){
  character.innerHTML = input.value.length;
}

function countWords(){
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  if(words){
    word.innerHTML = words.length;
  }else{
    word.innerHTML = 0;
  }
}