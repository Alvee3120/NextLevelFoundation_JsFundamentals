// rest Operator --> ... , it placed left side of equal ;

function sum(...num) {
  let sum = 0;
  for (n of num) {
    sum += n;
  }
  console.log(sum);
}

sum(1,1,3,4,2,453,34,23,232,423,43,42,4,24,23); 


const arr = [1,2,3,4,5,6,7,8,9,10]

const [, , ...remaining] = arr  // i pust 2 comma so it skip 2 items and put rest things on remaining array

console.log(remaining); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]


const [a,...newRemaining] = remaining  // a = 3 , newRemaining = [ 4, 5,  6, 7, 8, 9, 10 ]

console.log(a, newRemaining);
