// // Q. What Is JSON.stringify and JSON.parse ?

// Ans:- JSON.stringify() :-The JSON.stringify() function is used to convert a JavaScript object or value into a JSON string representation. It serializes the object or value, meaning it converts it into a format that can be easily transmitted or stored as text.

// Here are a few use cases and benefits of JSON.stringify():

// Data Transmission: When sending data from a client to a server or between different systems, the data is commonly transmitted in JSON format. JSON.stringify() is used to convert the JavaScript object or value into a JSON string before sending it over a network.

// Data Storage: When storing data in a file or a database, it's often convenient to store it in a structured format like JSON. JSON.stringify() can convert a JavaScript object into a JSON string that can be easily saved in a file or database.

// Data Exchange: JSON is a popular format for exchanging data between different systems and platforms. By using JSON.stringify(), you can convert complex JavaScript objects into JSON strings that can be easily understood and processed by other systems.

// Object Serialization: If you need to serialize an object in JavaScript, JSON.stringify() can be used to convert the object into a JSON string representation. Later, you can use JSON.parse() to deserialize the JSON string and convert it back into a JavaScript object.

// Logging and Debugging: JSON.stringify() is commonly used for debugging purposes to inspect the contents of an object or value. By converting the object to a JSON string, you can log it to the console or display it in a readable format for analysis.

// Overall, JSON.stringify() provides a convenient way to convert JavaScript objects or values into a JSON string, enabling easy data transmission, storage, exchange, serialization, and debugging.

// JSON.parse() :- The JSON.parse() function in JavaScript is used to parse a JSON string and convert it into a JavaScript object or value. It takes a valid JSON string as input and returns the corresponding JavaScript object or value.

// Here's how JSON.parse() is used:-
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const obj = JSON.parse(jsonString);
console.log(obj);
// In the example above, jsonString contains a valid JSON string representing an object with properties like name, age, and city. By calling JSON.parse(jsonString), the JSON string is parsed, and the resulting JavaScript object is assigned to the obj variable. The console.log(obj) statement then outputs the object to the console.

// The JSON.parse() function can also be used to parse arrays, numbers, strings, booleans, and null values represented in JSON format. Here's an example:
const jsonArrayString = "[1, 2, 3, 4, 5]";
const array = JSON.parse(jsonArrayString);
console.log(array);
// In this case, jsonArrayString contains a JSON string representing an array of numbers. After parsing it using JSON.parse(), the resulting JavaScript array is assigned to the array variable and then printed to the console.

// It's important to note that JSON.parse() will throw an exception if the input string is not valid JSON. Make sure the string you pass as an argument is properly formatted JSON to avoid errors.
