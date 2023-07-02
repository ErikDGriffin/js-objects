/// Exercise 1 Section

const numbers = [2, 22, 12, 17, 18, 39, 129]

function arraySum(numbers){
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    
});

return sum;

}
console.log(arraySum(numbers));

// Exercise 2 Section

const book = {};

book.title = " Dune";
book.author = " Frank Herbert";
book. pages = "617";
book.readCount = "3 times";
book.info = function() {
 return`title: ${this.title}, pages: ${this.pages} author: ${this.author} readCount:${this.readCount}`;  
};

console.log(book.info());

// Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let characters = word.split("");
  let reverseCharacters = characters.reverse();
  words[i] = reverseCharacters.join("");
}
let reverseSentence = words.join(" ");

console.log(reverseSentence);


// ?Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let rows = csvData.split("\n");
let headers = rows[0].split(",");
let result = [];
for (let i = 1; i < rows.length; i++) {
  let values = rows[i].split(",");
  let obj = {};
  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = values[j]; 
  }
  result.push(obj);
}

console.log(result);

