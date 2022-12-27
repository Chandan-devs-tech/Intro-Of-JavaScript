// let firstName=prompt("Enter your name: ");
// document.getElementById("name").textContent=firstName;

// two forward slash is comment in javascript

// datatypes are:-
// numbers
// String
// Boolean
// variables are that where we stored data in the  variable. They are of three types are:-
// var 
// let
// const

// variables are dynamic in nature it can change its data as when we required like :-
// let foo = "parth";
// foo=10;
// foo=true;
// As we can see that in "var" Keyword we can ramdomly or dynamically change the data of foo as we required.
// const is the variable that where we cannot change its data it is fixed.
// we can modify the value in let & var but not in const.
// there are some issue with var i.e we are using let & const mostly nowadays that we will be learning at the time of scopping.

// "let baz" here we are seeing that we are not assignining a value to a variable baz it will show us as a undefined because we are not assigning a value to it.

// there is one more datatype "null" that where we are assiging a value as a null to the variable, it will show us that there is no value to the variable.

// 1+1
// it will gives us 2
// 1+"fghgfjkh"
// here it will gives us "NaN" not a number because we cannot add number to string.
// there are some other datatypes like :- Symbol,BigInt to hold large integers etc.
// these datatypes that we have learn above all are primitive datatypes in javascript.

// We can also create our own custom datatypes that is known as "objects" like:-
// let person={firstName:"john",lastNmae:"doe",age:45};
// we can acess it by writing it in console :- person.firstName;
// similarly we can acess to all its data.
// we can also add another property in it by writing:-
// person.isLearningFrontend =  true;

// --------------------------------------------------------------

// operators in javascript
// let num1=6;
// let num2=7;
// let num3=num1+num3;
// console.log(num3)

// increment and decrement operator are :-
// ++  increment opereator 
// --  decrement operator
// like :-
// num1++ or num1=num1+1 or num1+=1
// there is also a ++num1 & num1++
// diffrence in between that is preincrement(++num1) and postincrement(num1++) both will increment the value but the only diffrence is that preincrement will show the incremented value instant but in post we will not see it instantly.
// shorthand method is to write it like this:-
// num1+=1;
// as we can do with same as sub and multilication & division also .

// -----------------------------------------------------------

// Type conversion

// you have assume everyyhing in javascript as a "object"
// to convert it like this:-
// num1=5;
// num1.tostring();
// num1='5';
// suppose we have int number as string like this:-
// '5'
// parseInt('5');
// 5;
// false.tostring();
// "false";
// boolean(0);
// false
// boolean(1) value except zero it will return true
// true
// boolean("") empty streing it returns false
// false 
// boolean("abc")
// true

// ----------------------------------------------------------

// Type coercion

// "john age is "+56;
// "john age is 56" it concatenated or join the string.
// let str1="abc"
// let str2="def"
// let str3=str1+str2
// "abcdef"
// "1"+1
// "11"
// ParseInt("1")+1
// 2
// "1"-1
// 0
// "2"-1
// 1
// "2"-"a"
// NaN
// "1"-(-1)
// 2
// "1"+(-1)
// "1-1"
// When we specify datatypes expliticitly it is type conversion.
// when we specify automatically or impliticitly it is type coercion.

// -------------------------------------------------------------

// Conditional operator

// the result of condition either can be true or false like:-
// num1=5;
// num2=2;
// num1>num2; or num1>=num2;
// true
// num1<num2 or  num1<=num2;
// false
// num1 == num2;
// false 
// num2=5;
// num1 == num2;
// true
// The result of condition operator either it will be true or false.

// --------------------------------------------------------

// flow statement

// if else 

// let num1=5;
// let num2=3;
// if(num2>num1){
//   console.log("num2 is greater than num1")
// }
// else{
//   console.log("it is not greater.")
// }

// -----------------------------------------------------------

// if else & else if:

// num1=5;
// num2=5;
// if(num1>num2){
//   console.log("num1 is greater than num2")
// }else if(num1<num2) {
//   console.log("num1 is smaller than num2")
// }else{
//   console.log("they are equal")
//   console.log("this is another statement")
// }

// ---------------------------------------------------------

// Ternary operator

// if else :-

// num1=10;
// num2=6;
// num2>num1 ? num2 + " is greater than " + num1 : num2 + " is smaller than " + num1;

// if else if else :-

// num1=8;
// num2=8;
// num1>num2 ? num1 + " is greater than " + num2 : num2>num1 ? num2 + " is greater than " +num1 : "Both are equal";

// if Condition ? "statement to print" : else if condition ? "statement to print" : else condition

// -----------------------------------------------------------

// Switch case :-

// num=3;
// switch(num){
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("tuesday");
//     break;
//   default:
//     console.log("invalid number");  
// }

// loops 

// when we use repeadily we use loops

// while(condition is true){
// excute the statement
// }

// let index=1;
// while(index<=10){
//   console.log(index)
//   index+=1;
// }

// do while

// index=4
// do{
//   console.log(index);
//   index++;}
//   while(index<=10)

// the diffrence between while and do while loop is that, do while loop will execute the statement atleast one time if the condition is false.

// for loop

// let text ="chandan"
// for(let i =1;i<=text.length;i++){
//   console.log(text.charAt(i-1),i)}

// c 1
// h 2
// a 3
// n 4
// d 5
// a 6
// n 7

// --------------------------------------------------------------

// arrays or list is collection of numbers,string or user defined data types objects,booleans.

// let fruits=["apple","banna","mango","guava"]

// we can acess to the fruits by using its index like:-

// fruits[0]
// 'apple'

// let number=[1,2,3,4,5,6,7]
// number.length
// 7

// we can modify the particular index in array like:-
// num ber[0]=34
// number[34,2,3,4,5,6,7]

// in javascript we can have a array like :-
// [34,"chandan",true,[1,23,3]]

// ----------------------------------------------------------
// print the sum of number in array like:-

// let num=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// for(let i=0;i<num.length;i++){
//   sum+=num[i]
// }

// it will print the result 45

// ------------------------------------------------------------

// we can also push/pop a number or a string in the existing array like:-

// let num=[1,3,4,56,7]
// num.push(67)
// [1,3,4,56,7,67] it will push the number to the last in the array.

// num.pop()
// [1,3,4,56,7] it will removes the number from the last in the array. 

// -------------------------------------------------------------

// for of loop

// let number=[2,3,456,7,89,4,34,6,7,9,33,55,77];
// let evenNmuber=[];
// let oddNumber=[];
// for(num of number){
//   if(num%2==0){
//     evenNumber.push(num)
//   }else{
//     oddNumber.push(num)
//   }
// }

// result is:-

// oddNumber
// (8) [3, 7, 89, 7, 9, 33, 55, 77]
// evenNumber
// (5) [2, 456, 4, 34, 6]

// ------------------------------------------------------------

// for in loop :-

// let number=[2,3,4,5,6,7,8,9,1]
// for(let i in number){
//   console.log(number[i],i)
// }

// result is:-

//   2 0
//   3 1
//   4 2
//   5 3 

// --------------------------------------------------------------

// The main diffrence between for of loop and for in loop is that 
// it gives acess to the indeses of the array but in for of loop it gives acess to the value of the array.

// ---------------------------------------------------------------
// we can also concatenate the arrray like this:-
//   let oddNumber=[3,5,7,9]
// let evenNumber=[2,4,6,8]
// oddNumber.concate(evenNmber)
// concatenate function 

// ------------------------------------------------------------

// we can also slice a number from an array
// let number=[2,3,4,5,6,7,8,9]
// number.slice[0,5]
// it will slice the number from o to 4 ignore the last index 5.
//                          OR
// we can also wrte it like this also:-
// number.slice(2,-1) it ignores the last index.
// number.slice(2,number.length) it give numbers till upto last index.
// number.slice(-1) it gives the number of last index.

// ------------------------------------------------------------



































































































}












