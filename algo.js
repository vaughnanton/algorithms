//Simple Array Sum
//Given an array of integers, find the sum of its elements.
//example, array ar=[1,2,3] ... 1 + 2 + 3 = 6 , return 6

function simpleArraySum(n, ar) {
    var sum=0
    for (i=0; i < n; i++) {
        sum += ar[i];
    }
    return sum;
}

//Compare the Triplets
//if a[i] > b[i] alice gets a point
//if a[i] < b[i] bob gets a point
//if a[i] = b[i] neither gets a point

var alice = 0;
var bob = 0;

function solve(a0, a1, a2, b0, b1, b2){

if (a0 > b0) {
    alice += 1;
} else if (a0 < b0) {
    bob += 1;
}
if (a1 > b1) {
    alice += 1;
} else if (a0 < b0) {
    bob += 1;
}
if (a2 > b2) {
    alice += 1;
} else if (a2 < b2) {
    bob += 1;
}
}

//A Very Big Sum
//Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(n, ar) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += ar[i]
    }
    return sum;
}

//Plus Minus
//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

function plusMinus(arr) {
    var even = [];
    var odd = [];
    var zero = [];
    for (var i=0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i]);
        } else if (arr[i] < 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    var evenFraction = even.length/arr.length;
    var oddFraction = odd.length/arr.length;
    var zeroFraction = zero.length/arr.length;
    console.log(oddFraction);
    console.log(evenFraction);
    console.log(zeroFraction);
}

//Staircase

function staircase(n) {
    for (var i=0; i<n; i++) {
    var space, hash, stair;
    space = n - 1 - i;
    hash = i + 1;
    stair = ' '.repeat(space) + '#'.repeat(hash);
    console.log(stair);
    }
}

//Mini-Max Sum
//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
function miniMaxSum(arr) {
var sorted = arr.sort((a, b) => a - b);
var maxsum = 0,
    minsum = 0;

for (var i = 0; i < 4; i++) {
    minsum += sorted[i];
}

for (var i = 1; i < 5; i++) {
    maxsum += sorted[i];
}

console.log(minsum, maxsum);
}

//Birthday Cake Candles
//You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
//For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 3, 2, she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

function birthdayCakeCandles(ar) {
  //ascending sort
  ar.sort(function(a, b){return a-b});
  //get highest number
  var highest = ar[ar.length-1];
  var howMany = 0;
  //count how many in array equal highest number
  for (var i = 0 ; i < ar.length ; i++) {
      if (ar[i] == highest) {
          howMany += 1;
      }
  }
  return howMany;
}

//Time Conversion
//Given a time in 12-hour AM/PM format (xx:xx:xxXM), convert it to military (24-hour) time.

function timeConversion(s) {
    //split at colons
    var arr = s.split(':');
    var hours = arr[0];
    var mins = arr[1];
    //split seconds + XM into own array
    var last = arr[2].split('');
    //join just the numbers of seconds
    var secs = last.slice(0,2).join('');

    if (last[2] == 'P' && hours == '12') {
        hours = 12;
    } else if (last[2] == 'P') {
        hours = parseInt(hours,10) + 12;
    }

    if (last[2] == 'A' && hours == '12') {
        hours = '00';
    }

    return hours + ':' + mins + ':' + secs;

}

//Grading Students
//given array of grades, if higher than 38 round up to nearest 5, EXCEPT for ex. 41 42 (don't round 1s and 2s up, only 3s 4s 43->45 44->45)
function gradingStudents(grades) {
    for (var i = 0; i<grades.length; i++) {
        if (grades[i] > 37 && ((grades[i] % 5) > 2)) {
            grades[i] = grades[i] - (grades[i] % 5) + 5;
        }
    }
    return grades;
}


//Apples and Oranges
//https://www.hackerrank.com/challenges/apple-and-orange/problem
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var appleHouse = 0;
    var orangeHouse = 0;

    var apple = String(apples);
    var orange = String(oranges);

    apple = apple.split(',').map(Number);
    orange = orange.split(',').map(Number);

    for (var i=0; i<apple.length; i++) {
        if (apple[i] + a >= s && apple[i] + a <= t ) {
            appleHouse++;
        }
    }

    for (var i=0; i<orange.length; i++) {
        if (orange[i] + b >= s && orange[i] + b <= t ) {
            orangeHouse++;
        }
    }

    console.log(appleHouse + '\n' + orangeHouse);

}


//Kangaroo
//https://www.hackerrank.com/challenges/kangaroo/problem
//(x1+y*v1)=(x2+y*v2) -> where y is number of jumps, must be true to return YES
function kangaroo(x1, v1, x2, v2) {
    if ( x1 < x2 && v1 < v2 )  {
        return 'NO';
    } else if ( (x1-x2) % (v2-v1) == 0 ) {
        return 'YES';
    } else {
        return 'NO';
    }
}

//Between Two Sets
//https://www.hackerrank.com/challenges/between-two-sets/problem
function getTotalX(a, b) {
    let validCount = 0;

    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                validCount++;
            }
        }
    }

    return validCount;
}

//Breaking the Records
//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let brokeMin = 0;
    let brokeMax = 0;
    for (let i = 0 ; i <= scores.length ; i++) {
        if (scores[i+1] > max) {
            max = scores[i+1];
            brokeMax++;
        }
        if (scores[i+1] < min) {
            min = scores[i+1];
            brokeMin++;
        }
    }
    let result = [brokeMax,brokeMin];
    return result;
}

//Birthday Chocolate
//https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s, d, m) {
    let combinations = 0;
    for (let i=0; i<s.length; i++) {
      let total = 0;
      for (let j=i; j<i+m; j++) {
        total += s[j]
      }
      if (total == d) {
      combinations++
      }
    }
    return combinations;
}

//Divisible Sum Pairs
//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function divisibleSumPairs(n, k, ar) {
    let total = 0;
    for (let i = 0; i < n ; i++) {
        for (let j = 1; j < n ; j++) {
            if ((ar[i] + ar[i+j]) % k == 0) {
                total++;
            }
        }
    }
    return total;
}

//Migratory Birds
//https://www.hackerrank.com/challenges/migratory-birds/problem
function migratoryBirds(arr) {
arr = arr.sort();
let count = 0;
let mf = 1;
let ans;
for(let i=0; i < arr.length; i++) {
  count = (arr[i] == arr[i+1]) ? count + 1 : 0;
  if (count > mf) {
      mf = count;
      ans = arr[i];
  }
}
    return ans;
}

//Day of the Programmer
//https://www.hackerrank.com/challenges/day-of-the-programmer/problem
function dayOfProgrammer(year) {
  if (year==1918) {
    return '26.09.1918';
  } else if ( (year <= 1917) && (year%4 == 0) || (year > 1918) && (year%400 == 0) || (year%4 == 0) && (year%100 !=0)) {
    return '12.09.' + year.toString();
  } else {
    return '13.09.' + year.toString();
  }
}

//Bon Appetit
//https://www.hackerrank.com/challenges/bon-appetit/problem
function bonAppetit(bill, k, b) {
var sum = bill.reduce((a, b) => a + b, 0);
var sumwo = sum - bill[k];
  if (sumwo/2 == b) {
      console.log('Bon Appetit');
  } else {
      console.log(b - sumwo/2);
  }
}

//Sock Merchant
//https://www.hackerrank.com/challenges/sock-merchant/problem
function sockMerchant(n, ar) {
  ar = ar.sort();
  let count = 0;
  let x = 0;
  for (let i = 0; i < ar.length ; i++) {
    if (ar[i+x] == ar[i+x+1]) {
      count++;
      x++;
    }
  }
      return count/2;
}

//Drawing Book
//https://www.hackerrank.com/challenges/drawing-book/problem
function pageCount(n, p) {
   let turns = 0;
   if (p > (n/2)) {
     turns = Math.ceil((n - p - (n % 2)) / 2)
   } else {
     turns = Math.ceil((p - 1) / 2)
   }
   return turns;
}

//Counting Valleys
//https://www.hackerrank.com/challenges/counting-valleys/problem
function countingValleys(n, s) {
  let loc = 0;
  let valleys = 0;
  let locarr = [0];
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
      if (s[i] == 'U') {
          loc+=1;
      } else {
          loc-=1;
      }
      locarr.push(loc);
  }
  for (let j = 0; j < locarr.length; j++) {
    if (locarr[j] == 0 && locarr[j+1] == -1) {
      valleys++;
    }
  }
  return valleys;
}

//Electronics Shop
//https://www.hackerrank.com/challenges/electronics-shop/problem
function getMoneySpent(keyboards, drives, b) {
  let inBudget = [];
  let total;
  let largest = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      total = keyboards[i] + drives[j];
      if (total <= b) {
        inBudget.push(total);
        largest = Math.max.apply(Math, inBudget);
      }
    }
  }
  return largest;
}

OR

function getMoneySpent(keyboards, drives, b) {
  let max = -1;
  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      if (keyboard + drive <= b && keyboard + drive > max) {
        max = keyboard + drive;
      }
    })
  });
  return max;
}

//Cat and Mouse
//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
function catAndMouse(x, y, z) {
  let fromA = z-x;
  let fromB = z-y;
  if (fromB < 0) {
      fromB = fromB * -1;
  }
  if (fromA < 0) {
      fromA = fromA * -1;
  }
  if (fromA == fromB) {
      return 'Mouse C';
  } else if (fromA > fromB) {
      return 'Cat B';
  } else {
      return 'Cat A';
  }
}

//Picking Numbers
//https://www.hackerrank.com/challenges/picking-numbers/problem
function pickingNumbers(a) {
    let subsets = [];
    let max = 0;

    for (let i=0 ; i < subsets.length ; i++) {
        if (subsets[i].length > max) {
            max = subsets[i.length];
        }
    }

    return max;

}

//Jumping on the Clouds
//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
function jumpingOnClouds(c) {
  let jumps = 0;
  for(let i = 0; i < c.length; i++) {
    if (c[i+2] === 0) {
      jumps++;
      i++;
    }
    else if (c[i+1] === 0) {
      jumps++;
    }
  }
  return jumps;
}

//Repeated String
//https://www.hackerrank.com/challenges/repeated-string/problem
function repeatedString(s, n) {
  let x = Math.floor(n/s.length);
  let full = s.repeat(x).split('');
  let num = 0;
  for (let j = 0; j<n; j++) {
    if (full[j] == 'a') {
      num++;
    }
  }
  return num;
}

//Fibonacci Sequence
function fib(n) {
    var fibArray = [0,1]
    for (var i = 0; i <= n; i++) {
        fibArray.push(fibArray[i]+fibArray[i+1])
    }
    return fibArray.slice(0,n)
}
