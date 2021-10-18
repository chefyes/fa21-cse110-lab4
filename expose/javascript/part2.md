# Variables and Scoping
## Part 2  

1. What will happen at line 12 and why? If the code causes an error, explain why.  
> the code will print 3 because it is the last number that the variable 'i' is assigned to after the for loop. The variable has a global scope because it was declared with "var".
2. What will happen at line 13 and why? If the code causes an error, explain why.
> the code will print '150' because discountedPrice was declared as a variable with global scope using "var". the last value that was assigned to discountedPrice was prices[2] * (1 - 0.5) which comes out to 150.
3. What will happen at line 14 and why? If the code causes an error, explain why.
> finalPrice was declared using var so it has global scope. the last value that was assigned to finalPrice was Math.round(discountedPrice * 100) / 100 which is rounding to the nearest whole number the value of 150 * 100 / 100. the code will print '150' because that was the final value of finalPrice.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
> the function will return the array "[50, 100, 150]" because the array was declared with global scope using var.
5. What will happen at line 12 and why?  If the code causes an error, explain why.
> error because i was declared using 'let' so line 12 tries to access 'i' which does not exist. 'i' in line 12 is outside of the scope of the for loop in which it was declared.
6. What will happen at line 13 and why? If the code causes an error, explain why.
> discountedPrice is not defined in the scope and only exists within the for loop. therefore, we get an error where the variable declared with let is not defined.
7. What will happen at line 14 and why? If the code causes an error, explain why.
> the finalPrice will be printed which is '150' because finalPrice was declared using "let" within the function but outside of the for loop. therefore, the variable 'finalPrice' exists at line 14.
8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
> the array "[50, 100, 150]" will be returned because the variable discounted is within the scope of the function. the variable exists inside the function but values can be added to it within the for loop because it is not being re-declared.
9. What will happen at line 11 and why? If the code causes an error, explain why.
> line 11 would yield an error because the variable 'i' is only in the scope of the for loop.
10. What will happen at line 12 and why? If the code causes an error, explain why.
> line 12 would yield '3' because the variable length was declared within the scope of the function so the variable can be accessed but not reassigned anywhere in the function.
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
> the function will return the array "[50, 100, 150]" because there are no errors and all of the constant variables obey the rules of being constants. the discountedPrices function works as intended.

## Data Types
12. Given the above Object, write the notation for:  
> A. Accessing the value of the name property in the student object  
  >> student['name']

> B. Accessing the value of the Grad Year property in the student object
  >> student['Grad Year']

> C. Calling the function for the greeting property in the student object  
  >>  student.greeting()

> D. Accessing the name property of the object in the Favorite Teacher property in student
  >> student['Favorite Teacher'].name

> E. Access the first index in the array of the courseLoad  property of the student object
  >>  student['courseLoad'][0]

## Basic Operators & Type Conversion
13. Arithmetic  
A. '3' + 2  
'32'  
B. '3' - 2  
1  
C. 3 + null  
3  
D. '3' + null  
'3null'  
E. true + 3  
4  
F. false + null  
0  
G. '3' + undefined  
'3undefined'  
H. '3' - undefined  
NaN  

14. Comparison  
A. '2' > 1  
true  
B. '2' < '12'  
false  
C. 2 == '2'  
true  
D. 2 === '2'  
false  
E. true == 2  
false  
F. true === Boolean(2)  
true  

15. Explain the difference between the == and === operators.  
> == is an equality check with type conversion but === is a strict equality check and does not use type conversion.  

## Functions

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.  
> The result will be [2,4,6]. In modifyArray, a for loop iterates through each value of the input array and calls callback() on each individual value of the input array. The new value which is double the previous value is then pushed to the end of the newArr.

## setInterval(), setTimeout(), clearTimeout()
19. What is the output of the above code?  
> 1  
> 4  
> 3  
> 2  

