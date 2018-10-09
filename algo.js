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
