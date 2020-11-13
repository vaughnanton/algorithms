// ----------------------------------------------------------------------------

// Reverse a string
// ex. reverseString("cars") => srac

function reverseString(input) {
  // split at each index, create array, reverse array, join at each index
  let revesredInput = input.split("").reverse().join("");
}

// ----------------------------------------------------------------------------

// Reverse a string without internal functions

function reverese(str) {
  var rtnStr = '';
  for (let i = str.length-1; i >= 0; i--) {
    rtnStr += str[i];
  }
  retrun rtnStr;
}

// ----------------------------------------------------------------------------

// Given a string, return true if the string is a palindrome or false if it is not.
// ex. palindrome("madam") => true
// ex. palindrome("abcdef") => false

function palindrome(input) {
  let cleanedInput = input.split(" ").join("");
  let reversedCleanedInput = cleanedInput.split("").reverse().join("")
  if (cleanedInput == reversedCleanedInput) {
    return true
  } else {
    return false
  }
}

// ----------------------------------------------------------------------------

// Reverse a linked list iteratively & recursively
// Ex.
// Input: 1->2->3->4->Null
// Ouput: 4->3->2->1->Null

// iteratively
var reverseList = function(head) {
  // to store previous element of node beforehand
  let prev = null;
  // to know which node we're currently at
  let curr = head;
  // to store the next node before changing the reference, if we change wo saving
  // we lose the next pointer in the iteration
  let nextTemp = curr.next;

  while (curr != null) {
    // save the next pointer in the temp variable before overriding curr.next
    nextTemp = curr.next;
    // reverse the point of current node to its previous node
    curr.next = prev;
    // step forward int he list
    // previous node becomes the node we're currently at
    prev = curr;
    // current node becomes the next node we saved earlier
    curr = nextTemp;
  }

  // at the end our previous node will be the head node of the new list
  return prev
}

// recursively
var reverseList = function(head) {
  // base case how it will stop recursively calling itself
  // if next node is null we are at last element so this will be head of reversed linked list
  if (head == null || head.next == null) {
    return head
  }
  // when reverseList() reaches end of list
  newHead = reverseList(head.next);
  // will grab the last node as head and reference backwards
  head.next.next = head;
  head.next = null;
  return newHead;
}

// ----------------------------------------------------------------------------

// Write a function to return an n element in a Fibonacci sequence iteratively & recursively
// a fibonnacci sequence is every number after the first two is the sum of two preceeding ones
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// iteratively (O(n) - linear)

function fib(index){
  let fibArray = [0,1];
  for (let i = 1; i <= index; i++) {
    fibArray[i+1] = (fibArray[i] + fibArray[i-1]);
  }
  return fibArray[index]
}

// recursively (O(n^2) - exponential)
// to visualize, think of the tree diagram fib(5) is the sum of fib(4) + fib(3)

function fib(index) {
  // base case
  if (index < 2) {
    return index
  }
  return fib(n - 1) + fib(n - 2)
}

// recursively with memorization(don't keep calculating for args already calculated))

// will take and return a function
// this memorizer is pretty universal and can be used to improve runtime for basically any function
function memorize(fn) {
  // store function calls
  const cache = {}
  // allow it to take any number of arguments
  return function(..args) {
    // look into cache, if contains key with set of args, return corresponding value
    if (cache[args]) {
      return cache[args];
    }
    // if the function hasn't been called with current set of args, we pass
    // it to the original function (fn) and save result to cache
    newCall = fn.apply(null, args);
    cache[args] = newCall;
    return newCall;
  }
}

// store memorize funciton as a constant and pass args that would otherwise be passed to fib
const fastFib = memorize(fib);

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fastFib(n - 1) + fastFib(n - 2);
}

// ----------------------------------------------------------------------------

// MAP - creates a new array by doing something with each item in an array

var numbers = [3, 56, 2, 48, 5];
const newNumbersMap = numbers.map( x => x * 2);
// newNumbersMap = [ 6, 112, 4, 96, 10];

// REDUCE - accumulate a value by doing something to each item in an array

var numbers = [3, 56, 2, 48, 5];
const reducedNumbers = numbers.reduce( (accumulator, currentNumber) => accumulator + currentNumber )
// reducedNumbers = 114

// FILTER - create a new array by keeping items that return true

var numbers = [3, 56, 2, 48, 5];
const filteredNumbers = number.filter( num => num > 10 );
// filteredNumbers = [56, 48];

// ----------------------------------------------------------------------------

// Verify a prime number - divisible only by itself and 1

function isPrime(n) {
  var divisor = 2;
  while (n > divisor){
    if(n % divisor == 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

// ----------------------------------------------------------------------------

// Find the greatest common divisor between two numbers

function greatestCommonDivisor(a, b) {
  var divisor = 2,
      greatestDivisor = 1;

  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

// ----------------------------------------------------------------------------

// Remove duplicate members from an array

function removeDuplicate(arr) {
  // associative array to hold whether array item exists
  let exists = {},
  // output array
      outArr = [],
      element;

  for(let i = 0; i < arr.length; i++) {
    element = arr[i];
    // if the element isn't present in exists object, push to the output array
    if(!exists[element]) {
      outArr.push(element);
      exists[element] = true;
    }
  }

  return outArr;
}
