function translateToPigLatin(word) {
  return word.slice(1) + word[0] + "ay";
}

var originalWords = process.argv.slice(2);
//console.log(originalWords) just to see how to code works
//var str = originalWords[0]
var pigLatinWords = [];

for (var i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));


