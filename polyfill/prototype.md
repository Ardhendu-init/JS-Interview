## Prototype in JavaScript

Every object has a hidden link `[[Prototype]]` pointing to another object — that's the **prototype**.

### Simple Analogy

Think of it like inheritance in a family:
Grandparent → has some properties/methods
↑
Parent → inherits from Grandparent
↑
Child → inherits from Parent

If Child doesn't have something, JS looks up the chain.

### Simple Rule

If a property/method is not found on the object itself, JS walks up the **prototype chain** to find it.

### Prototype Chain

```
arr (instance)
 └── Array.prototype  →  map, filter, reduce...
      └── Object.prototype  →  toString, hasOwnProperty...
           └── null  (end of chain)
```

### Why `Array.prototype.myMap`?

All arrays share `Array.prototype` — so adding a method there makes it available to every array without copying it to each one.

```javascript
Array.prototype.myMap = function() { ... }

[1,2,3].myMap(...)  // ✅
[4,5,6].myMap(...)  // ✅
```

### Lookup Order

1. Does the array itself have the method? ❌
2. Does `Array.prototype` have it? ✅ → use it

#### Key Points

### Concept Meaning

    prototype                                   A shared object where methods are stored
    [[Prototype]]                               Hidden link every object has to its prototype
    Prototype chain                             JS walks up this chain to find properties
    Array.prototype.myMap                       Adds myMap to ALL arrays

### In short:

Prototype is JavaScript's way of sharing methods across all instances without copying them everywhere.

Polyfill Study order

1. map → filter → reduce → forEach ->find -> flat (array basics) ✅
2. call → apply → bind (function methods) ✅
3. debounce → throttle (most asked in interviews)
4. Promise → Promise.all (async)
5. memoize → deepClone (advanced)
