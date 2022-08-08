// 1.) Sum Zero

const addToZero = (arr) => {
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
      if (i !== j){
        if (arr[i] + arr[j] === 0){
          return true
        }
      }
    }
  }
  return false
}

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

//time:O(n)
//space:O(1)

// 2.) Unique Characters

const hasUniqueChars = (str) => {
  for(let i = 0; i < str.length; i++){
    for (let j = i+1; j < str.length; j++){
      if (str[i]===str[j]){
        return false
      }
    }
  }
  return true
}
  

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

//time:O(n)
//space:O(n)



// 3.) Pangram Sentence

const isPangram = str => {
  str = str.toLowerCase().replace(/([^a-z])+/g,``)
  let map = {}
  
  for(let i=0; i<str.length; i++){
    let letter = str[i]
    if(map[letter]){
      map[letter] += 1
    }else{
      map[letter] = 1
    }
  } 
  let count = 0 

  for (let key in map){
    count++
  }
  if (count>=26){
    return true 
  } else {
    return false
  }
}


isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False


//time:O(n)
//space:O(n)




// 4.) Longest Word

const findLongestWord = arr => {
  let wordLength = 0
  arr.forEach(word => {
    if (word.length > wordLength){
      wordLength = word.length
    }
  })
  return wordLength
}

//time:O(n)
//space:O(1)
