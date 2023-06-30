const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});
const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
// In your code, you have two promises, `firstPromise` and `secondPromise`, created using the `Promise` constructor. Each promise uses `setTimeout` to resolve with a value after a specified delay.

// The `Promise.race()` function takes an iterable of promises and returns a new promise that resolves or rejects as soon as the first promise in the iterable resolves or rejects. In your case, you pass `[firstPromise, secondPromise]` to `Promise.race()`.

// Here's what happens step by step:

// 1. `firstPromise` is created with a delay of 500 milliseconds. It will resolve with the value "one" after the specified delay.

// 2. `secondPromise` is created with a delay of 100 milliseconds. It will resolve with the value "two" after the specified delay.

// 3. `Promise.race([firstPromise, secondPromise])` creates a new promise that races between `firstPromise` and `secondPromise`. It will settle (resolve or reject) as soon as the first promise in the array settles.

// 4. The `then()` method is chained to the `Promise.race()` call. It waits for the race promise to settle and then logs the resolved value (`res`) to the console.

// When you run this code, the promise that resolves first will determine the output. Since `secondPromise` has a shorter delay (100 milliseconds) compared to `firstPromise` (500 milliseconds), it will resolve first. Therefore, the output will be:

// ```
// two
// ```

// The `Promise.race()` function allows you to race multiple promises and handle the result of the first one that resolves or rejects, which can be useful in various scenarios, such as handling timeouts or retrieving data from multiple sources and responding with the fastest available result.
