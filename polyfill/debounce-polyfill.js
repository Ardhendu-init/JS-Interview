// imagine this search input
input.addEventListener("input", () => {
  fetch("/api/search?q=" + input.value); // API call
});
// user types "react"

// keystroke → "r"     → API call 1 🔥
// keystroke → "re"    → API call 2 🔥
// keystroke → "rea"   → API call 3 🔥
// keystroke → "reac"  → API call 4 🔥
// keystroke → "react" → API call 5 🔥

// 5 API calls for one search
// server is getting hammered
// most results are thrown away anyway

// The Idea:-
// Every time user types:
//   → cancel the previous scheduled call
//   → schedule a NEW call after 300ms

// If user types again before 300ms:
//   → cancel again
//   → schedule again

// If user STOPS for 300ms:
//   → nothing to cancel
//   → the scheduled call fires ✅

// we want to do this:
const debouncedSearch = debounce(searchFn, 300);
const debouncedResize = debounce(resizeFn, 500);
// each has its OWN timer, OWN delay

// so we need debounce to:
// 1. accept a function and delay
// 2. return a NEW function
// 3. that NEW function manages its own timer

function debounce(fn, delay) {
  let timer; // 👈 this timer belongs to THIS debounce call only
  // each debounce() call creates a fresh closure
  // so debouncedSearch and debouncedResize
  // have completely separate timers

  return function () {
    // 👈 this is what gets called on every keystroke
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

// debounce(fn, 300) is called ONCE
//   → creates timer variable in memory
//   → returns a function that CLOSES OVER timer
//   → that returned function is what you call repeatedly

// Every call to the returned function:
//   → goes back to the SAME timer variable (closure)
//   → that's how it can clearTimeout the previous one

// This is a CLOSURE.
// timer lives in the closure scope.
function debounce(fn, delay, immediate = false) {
  let timer;

  function debounced(...args) {
    // should we call immediately? (leading edge)
    const callNow = immediate && !timer;
    //                               ↑
    //                   no timer running = first call in silence

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null; // reset so next call can be leading edge again

      if (!immediate) {
        fn.apply(this, args); // trailing edge (default)
      }
    }, delay);

    if (callNow) {
      fn.apply(this, args); // leading edge
    }
  }
  // real use case — component unmounts while timer is pending
  // we need to cancel the timer to avoid memory leaks

  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}

// Leading vs Trailing

// input: r → e → a → c → t → [silence 300ms]

// TRAILING (immediate = false) — default
//   r    e    a    c    t    ...300ms...   FIRE✅
//   ↓    ↓    ↓    ↓    ↓
//   cancel cancel cancel cancel cancel → then fire

// LEADING (immediate = true)
//   r    e    a    c    t    ...300ms...   ready
//   ↓
// FIRE✅ immediately
//        cancel cancel cancel cancel → silence → ready for next burst

const searchDebounce = debounce(searchFn, 300);
const resizeDebounce = debounce(resizeFn, 500);

// searchDebounce has its OWN timer variable
// resizeDebounce has its OWN timer variable
// they NEVER interfere with each other

// this is because each call to debounce()
// creates a brand new execution context
// with a brand new 'let timer' in memory
// and the returned function closes over THAT specific timer

// debounce(searchFn, 300)          debounce(resizeFn, 500)
//   ↓                                ↓
// closure {                        closure {
//   timer: 101   ← own timer         timer: 205   ← own timer
//   fn: searchFn                     fn: resizeFn
//   delay: 300                       delay: 500
// }                                }
