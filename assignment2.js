// 1. Sum of two numbers
function sum(a, b){ return a + b; }
console.log("1:", sum(3,5)); // 8

// 2. Print "Hello <name>"
function sayHello(name){ return `Hello ${name}`; }
console.log("2:", sayHello("Aradhya")); // Hello Aradhya

// 3. Even/Odd check
function isEven(n){ return n % 2 === 0 ? "Even" : "Odd"; }
console.log("3:", isEven(7)); // Odd

// 4. Celsius → Fahrenheit
function cToF(c){ return (c * 9/5) + 32; }
console.log("4:", cToF(0)); // 32

// 5. Max among 3 numbers
function max3(a,b,c){ return Math.max(a,b,c); }
console.log("5:", max3(3,9,7)); // 9

// 6. Find string length
function strLen(s){ return s.length; }
console.log("6:", strLen("hello")); // 5

// 7. Toggle boolean
function toggleBool(x){ return !x; }
console.log("7:", toggleBool(true)); // false

// 8. Concatenate strings
function concat(...parts){ return parts.join(''); }
console.log("8:", concat("Hello"," ","JS")); // Hello JS

// 9. Positive/Negative/Zero
function sign(n){
  if(n>0) return "Positive";
  if(n<0) return "Negative";
  return "Zero";
}
console.log("9:", sign(0)); // Zero

// 10. var / let / const example
function varLetConst(){
  var x = 1; // function-scoped, can reassign
  let y = 2; // block-scoped, can reassign
  const z = 3; // block-scoped, cannot reassign
  x = 10; y = 20; // allowed
  return {x,y,z};
}
console.log("10:", varLetConst()); // {x:10,y:20,z:3}

// 11. Multiplication table
function table(n, upto=10){
  for(let i=1;i<=upto;i++){
    console.log(`${n} x ${i} = ${n*i}`);
  }
}
console.log("11:");
table(5,10);

// 12. Sum of first 10 natural numbers
function sumFirstN(n){
  return n*(n+1)/2;
}
console.log("12:", sumFirstN(10)); // 55

// 13. Switch-case → day name
function dayName(num){
  switch(num){
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid";
  }
}
console.log("13:", dayName(3)); // Wednesday

// 14. Function → Factorial
function factorial(n){
  if(n<0) return undefined;
  let res = 1;
  for(let i=2;i<=n;i++) res *= i;
  return res;
}
console.log("14:", factorial(5)); // 120

// 15. Function → Voting eligibility
function canVote(age){ return age >= 18 ? "Eligible" : "Not eligible"; }
console.log("15:", canVote(20)); // Eligible

// Part-B ------------------------------------------------------------

// 16. Prime check
function isPrime(n){
  if(n<=1) return false;
  if(n<=3) return true;
  if(n%2===0 || n%3===0) return false;
  for(let i=5;i*i<=n;i+=6){
    if(n%i===0 || n%(i+2)===0) return false;
  }
  return true;
}
console.log("16:", isPrime(97)); // true

// 17. Sum of digits of a number
function sumDigits(n){
  n = Math.abs(n);
  let sum=0;
  while(n){
    sum += n % 10;
    n = Math.floor(n/10);
  }
  return sum;
}
console.log("17:", sumDigits(123)); // 6

// 18. Reverse string without reverse()
function reverseStr(s){
  let res = '';
  for(let i=s.length-1;i>=0;i--) res += s[i];
  return res;
}
console.log("18:", reverseStr("hello")); // olleh

// 19. Grade from marks
function grade(m){
  if(m>=90) return 'A';
  if(m>=75) return 'B';
  if(m>=50) return 'C';
  return 'Fail';
}
console.log("19:", grade(88)); // B

// 20. Calculator function (two numbers + operator)
function calc(a,b,op){
  switch(op){
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? 'Error: divide by 0' : a / b;
    default: return 'Invalid operator';
  }
}
console.log("20:", calc(8,2,'/')); // 4

// 21. Count vowels in a string
function countVowels(s){
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for(const ch of s) if(vowels.includes(ch)) count++;
  return count;
}
console.log("21:", countVowels("Hello World")); // 3 (e,o,o)

// 22. Fibonacci series up to n terms
function fibonacci(n){
  if(n<=0) return [];
  if(n===1) return [0];
  const arr = [0,1];
  while(arr.length < n) arr.push(arr[arr.length-1] + arr[arr.length-2]);
  return arr;
}
console.log("22:", fibonacci(7)); // [0,1,1,2,3,5,8]

// 23. Return min and max from array
function minMax(arr){
  if(arr.length===0) return null;
  let min = arr[0], max = arr[0];
  for(let x of arr){
    if(x < min) min = x;
    if(x > max) max = x;
  }
  return {min, max};
}
console.log("23:", minMax([3,7,1,9])); // {min:1, max:9}

// 24. Simple menu using switch-case (example function)
function menu(choice, a, b){
  switch(choice){
    case 1: return a + b;
    case 2: return a - b;
    case 3: return a * b;
    case 4: return b === 0 ? 'Error' : a / b;
    default: return 'Invalid choice';
  }
}
console.log("24:", menu(3,4,5)); // 20

// 25. Armstrong number check (for n-digit number)
function isArmstrong(n){
  const s = String(Math.abs(n));
  const p = s.length;
  let sum = 0;
  for(const ch of s) sum += Math.pow(Number(ch), p);
  return sum === Math.abs(n);
}
console.log("25:", isArmstrong(153)); // true


