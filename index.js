var kittens = ["Milo","Otis","Garfield"]
 //define your array here

function destructivelyAppendKitten(kitten){
  return kittens.push(kitten);
}

function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(kitten){
  return kitten.pop();
}

// Add your functions and code here
