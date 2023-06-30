const num = 3 + 4 + "5";
console.log(typeof num); // string

console.log(typeof 3 + 4 + "5"); //In this expression, the typeof operator is applied to the number 3, which returns the string "number". Then, the + operator is used to concatenate the string "number" with the number 4, resulting in the string "number4". Finally, the + operator is used again to concatenate the string "number4" with the string "5", resulting in the final string "number45".

console.log(typeof (3 + 4 + +"5")); //In this expression, the subexpression (3 + 4 + +"5") is enclosed within parentheses. Inside the parentheses, the addition operator + is used to perform addition between the numbers 3, 4, and the unary plus operator (+) applied to the string "5". The unary plus operator converts the string "5" to the number 5. Therefore, (3 + 4 + +"5") evaluates to 12 (the sum of 3, 4, and 5).Next, the typeof operator is applied to the resulting number 12, which returns the string "number".
