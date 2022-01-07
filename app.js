function findLongestWordLength(str) {
  let longestWord = "";
  let arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length){
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(findLongestWordLength("One Two Three"));
