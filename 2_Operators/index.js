//Day2
//1. Arithmetic Operations
//Task1-5: Write a program to add, subtract,multiply,divide two number & also remainderof one number divided by others
let a=20;
let b=30;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a % b);
//2. Assignment Operators
//Task6: Use the += operator to add a number to a variable and log the result to the console.
let c=5
c +=2;
console.log(c);//7
//Task7: Use the -= operator to add a number to a variable and log the result to the console.
 let d=2;
 d -=1;
 console.log(d);//1

//3. Comparison Operators
//Task8-10: Write a program to compare two numbers using > and <, >= and <=, == & ===
let e=10;
let f=20;

console.log(e>f);
console.log(e<f);
console.log(e>=f);
console.log(e<=f);
let str="10"
console.log(e==str);//compares the values of two variables after performing type conversion if necessary
//true
console.log(e===str);//compares the value of two variables before performing type conversion
//false

//4. Logical Operators
//Task 11-13:
if(e>f && e<f) // &&-> Need to pass two conditions to exicuit the if block
{
    console.log("&&->Test case passed");
}else{
    console.log("&&->Test case failed");
}

if(e>f||e<f)// need one of the  condition to pass to exicute the if block
{
    console.log("||-> Test case passed");
}else{
    console.log("||-> Test case failed");
}

if(!e===f) //negate a condition
{
    console.log("If block exicuted");
}else{
    console.log("else");
}

//5. Ternary Operator
//Task14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
let check= e>0 ?"Positive": "Nagative"
console.log(check);