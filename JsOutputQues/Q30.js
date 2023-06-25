// Shallow Copy and Deep Copy in JavaScript
// In JavaScript, there are two ways to copy objects: Shallow copy and Deep copy. Understanding the differences between these two types of copying can be important in many programming scenarios, as they each have their own strengths and weaknesses.

// Shallow Copy
// A shallow copy is a copy that only goes one level deep. In other words, it copies the object and all its properties, but any nested objects or arrays will still reference the same memory location as the original object. It means that if you make changes to the nested object, it will also affect the original object, as well as the copied object.

// Here is an example of shallow copying an object using the spread operator:

// const originalObject = { a: 1, b: { c: 2 } };
// const shallowCopy = { ...originalObject };
// In this example, originalObject has a nested object b that has a property c. The spread operator ... is used to create a new object shallowCopy that is a shallow copy of originalObject. This means that if we make changes to shallowCopy, it will not affect originalObject:

// shallowCopy.a = 3; // Changes shallowCopy, but not originalObject
// shallowCopy.b.c = 4; // Changes both shallowCopy and originalObject
// As you can see, changing the value of the property a on shallowCopy does not affect originalObject. However, changing the value of the property c on the nested object b affects both shallowCopy and originalObject.

// It is because shallowCopy and originalObject both have a reference to the same nested object b. When we modify b on shallowCopy, it modifies the same object on originalObject.

// Deep Copy
// A deep copy is a copy that creates a new object with new memory locations for all of its properties and nested objects or arrays. It means that if you make changes to the copied object or any of its nested objects or arrays, it will not affect the original object.

// Here is an example of deep copying an object using the JSON.parse() and JSON.stringify() methods:

// const originalObject = { a: 1, b: { c: 2 } };
// const deepCopy = JSON.parse(JSON.stringify(originalObject));
// In this example, we use JSON.stringify() to convert originalObject to a JSON string, and then use JSON.parse() to convert that string back to a new object deepCopy. It creates a deep copy of originalObject.

// Now, if we make changes to deepCopy, it will not affect originalObject:

// deepCopy.a = 3; // Changes deepCopy, but not originalObject
// deepCopy.b.c = 4; // Changes deepCopy, but not originalObject
// As you can see, changing the value of the property a or the nested object b on deepCopy does not affect originalObject. It is because deepCopy and originalObject have separate memory locations for all of their properties and nested objects.

// Performance Considerations
// It is important to note that deep copying can be more expensive in terms of performance than shallow copying. It is because creating a new object and copying all of its properties and nested objects can take more time and memory than simply creating a new object with references to the same memory locations as the original object.

// In some cases, shallow copying can be more efficient and practical. However, if you need to make sure that changes to a copied object do not affect the original object, deep copying is necessary.

// Conclusion
// In JavaScript, there are two ways to copy objects: shallow copy and deep copy. Shallow copying creates a new object with references to the same memory locations as the original object, while deep copying creates a new object with new memory locations for all of its properties and nested objects or arrays.

// Shallow copying can be more efficient in terms of performance, but may result in unexpected behavior if changes to a copied object affect the original object. Deep copying ensures that changes to a copied object do not affect the original object, but may be more expensive in terms of performance.

// While using JSON.parse() and JSON.stringify() is an easy way to create a deep copy of an object, it may not work in all cases. If you need to create a deep copy of an object, using JSON.parse() and JSON.stringify() is an easy option. However, if the object being copied contains functions or circular references, a recursive deep copy function may be necessary.
