var kittens = ["Milo","Otis","Garfield"]
 //define your array here

function destructivelyAppendKitten(kitten){
  return kittens.push(kitten);
}

function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(kitten){
  return [...kittens,kitten];
}

function prependKitten(kitten){
  return [kitten,...kittens];
}
// Add your functions and code here
