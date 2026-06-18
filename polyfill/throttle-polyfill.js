// ### Start from the problem

```javascript
// imagine this scroll listener
window.addEventListener('scroll', () => {
  console.log('scroll fired:', Date.now());
});
``````
user scrolls for 3 seconds

fired at 0ms
fired at 2ms
fired at 4ms
fired at 6ms
... fires 500-1000 times
... browser is choking 😫
... layout recalculations every 2ms
```
// **We don't need 500 calls. We need ONE call every 300ms.**

// ### debounce vs throttle — the key difference first

```
debounce  → WAITS for silence → then fires ONCE
            "fire after user STOPS"

throttle  → fires at REGULAR intervals NO MATTER WHAT
            "fire at most ONCE every X ms"
``````
user scrolls for 3 seconds with throttle(fn, 300ms)

0ms    → FIRE ✅
300ms  → FIRE ✅
600ms  → FIRE ✅
900ms  → FIRE ✅
1200ms → FIRE ✅
...
guaranteed regular execution, never too fast
```
// ### The idea in plain english

```
Every time the function is called:
  → has X ms passed since last call?
      YES → execute now, update last called time
      NO  → ignore (or schedule for later)
```;

// ### Approach 1 — Timestamp based (simplest)

// #### Step 1 — skeleton

function throttle(fn, limit) {}

// #### Step 2 — track last call time

function throttle(fn, limit) {
  let lastCalledAt = 0;
  //  ↑
  //  0 means never called
  //  so first call always goes through

  return function (...args) {
    const now = Date.now();
    //            ↑
    //    current timestamp in ms
    //    e.g. 1718234400000
  };
}

// #### Step 3 — check if enough time has passed

function throttle(fn, limit) {
  let lastCalledAt = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCalledAt >= limit) {
      //   ↑
      //   how much time since last call?
      //   if >= limit → allowed to call

      lastCalledAt = now; // update last called time
      fn.apply(this, args); // call the function
    }
    // else → ignore this call
  };
}

// #### Step 4 — trace through execution

```javascript
const throttled = throttle(handleScroll, 300);
window.addEventListener('scroll', throttled);
``````
scroll fires at 0ms
  now = 0
  0 - 0 = 0 >= 300? NO... wait
  actually lastCalledAt = 0, now = Date.now() = 1718234400000
  1718234400000 - 0 = huge number >= 300 ✅
  → FIRE, lastCalledAt = 1718234400000

scroll fires at 50ms
  now = 1718234400050
  1718234400050 - 1718234400000 = 50 >= 300? NO ❌
  → IGNORED

scroll fires at 150ms
  now - lastCalledAt = 150 >= 300? NO ❌
  → IGNORED

scroll fires at 300ms
  now - lastCalledAt = 300 >= 300? YES ✅
  → FIRE, lastCalledAt updated

scroll fires at 320ms
  now - lastCalledAt = 20 >= 300? NO ❌
  → IGNORED

scroll fires at 600ms
  now - lastCalledAt = 300 >= 300? YES ✅
  → FIRE
```;

// #### Complete timestamp version

function throttle(fn, limit) {
  let lastCalledAt = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCalledAt >= limit) {
      lastCalledAt = now;
      return fn.apply(this, args);
    }
  };
}

// **This is the leading edge throttle — fires at the START of each interval.**

// ### Problem with timestamp version

```
user scrolls → fires at 0ms   ✅
user scrolls → fires at 300ms ✅
user scrolls → fires at 550ms → ignored (only 250ms passed)
user STOPS

last event at 550ms was IGNORED
but it had the FINAL scroll position
we missed the last update ❌
```;

// **We need to also capture the LAST call even if it falls mid-interval.**

// ### Approach 2 — Timer based

function throttle(fn, limit) {
  let timer = null;
  //  ↑
  //  if timer exists → we're in cooldown
  //  if null → ready to fire

  return function (...args) {
    if (!timer) {
      // no timer running → fire immediately
      fn.apply(this, args);

      // set cooldown timer
      timer = setTimeout(() => {
        timer = null; // cooldown over, ready again
      }, limit);
    }
    // timer exists → in cooldown → ignore
  };
}

```
scroll at 0ms
  timer = null → FIRE ✅
  timer = setTimeout(reset, 300)  id: 101

scroll at 50ms
  timer = 101 (exists) → IGNORE ❌

scroll at 150ms
  timer = 101 (exists) → IGNORE ❌

300ms passes
  timer = null (reset)

scroll at 310ms
  timer = null → FIRE ✅
  timer = setTimeout(reset, 300)  id: 102
```;

// ### Approach 3 — Combined (BEST version)

// **Leading + Trailing — fires at start AND captures last call**

function throttle(fn, limit) {
  let lastCalledAt = 0; // for leading edge
  let timer = null; // for trailing edge

  return function (...args) {
    const now = Date.now();
    const remaining = limit - (now - lastCalledAt);
    //                  ↑
    //    how many ms until next allowed call
    //    e.g. limit=300, last called 100ms ago → remaining=200ms

    if (remaining <= 0) {
      // enough time passed → leading edge fire
      if (timer) {
        clearTimeout(timer); // cancel any pending trailing call
        timer = null;
      }

      lastCalledAt = now;
      fn.apply(this, args); // FIRE immediately ✅
    } else {
      // still in cooldown → schedule trailing call
      clearTimeout(timer);

      timer = setTimeout(() => {
        lastCalledAt = Date.now();
        timer = null;
        fn.apply(this, args); // FIRE at end of interval ✅
      }, remaining);
    }
  };
}

// ### Trace through combined version

```
throttle(fn, 300ms)

scroll at 0ms
  remaining = 300 - (0 - 0) = 300? wait...
  lastCalledAt = 0, now = 1000 (simplify)
  remaining = 300 - (1000 - 0) = negative → leading edge
  → FIRE immediately ✅
  lastCalledAt = 1000

scroll at 1100ms (100ms later)
  remaining = 300 - (1100 - 1000) = 300 - 100 = 200ms
  → schedule trailing call in 200ms

scroll at 1150ms (50ms later)
  remaining = 300 - (1150 - 1000) = 150ms
  → cancel previous trailing, schedule new one in 150ms

scroll at 1200ms (50ms later, user stops)
  remaining = 300 - (1200 - 1000) = 100ms
  → cancel previous trailing, schedule new one in 100ms

100ms passes (at 1300ms)
  trailing timer fires
  → FIRE with last scroll position ✅
``````
result:
  1000ms → FIRE (leading)  ← first call
  1300ms → FIRE (trailing) ← captures final position
  everything in between → ignored
```;

// ### Add cancel method. (FINAL VERSION)

function throttle(fn, limit) {
  let lastCalledAt = 0;
  let timer = null;

  function throttled(...args) {
    const now = Date.now();
    const remaining = limit - (now - lastCalledAt);

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      lastCalledAt = now;
      fn.apply(this, args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastCalledAt = Date.now();
        timer = null;
        fn.apply(this, args);
      }, remaining);
    }
  }

  throttled.cancel = function () {
    clearTimeout(timer);
    timer = null;
    lastCalledAt = 0; // full reset
  };

  return throttled;
}

// ### Test it

// scroll handler
const handleScroll = throttle(() => {
  console.log("scroll position:", window.scrollY);
}, 300);

window.addEventListener("scroll", handleScroll);
// fires max once per 300ms ✅

// button spam protection
const handleSubmit = throttle(() => {
  console.log("form submitted");
}, 2000);

button.addEventListener("click", handleSubmit);
// no matter how fast user clicks → fires once per 2 seconds ✅

// resize handler
const handleResize = throttle(() => {
  recalculateLayout();
}, 500);

window.addEventListener("resize", handleResize);

// cancel on cleanup
window.removeEventListener("scroll", handleScroll);
handleScroll.cancel();

// ### In React

// ✅ correct way in React
function ScrollTracker() {
  const handleScroll = useCallback(
    throttle(() => {
      console.log("scrollY:", window.scrollY);
    }, 300),
    [],
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // cleanup ✅
    };
  }, [handleScroll]);
}

// ### All three versions side by side

// VERSION 1 — timestamp (leading only, simple)
function throttle(fn, limit) {
  let lastCalledAt = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalledAt >= limit) {
      lastCalledAt = now;
      fn.apply(this, args);
    }
  };
}

// VERSION 2 — timer (leading only, different approach)
function throttle(fn, limit) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => (timer = null), limit);
    }
  };
}

// VERSION 3 — combined (leading + trailing, best)
function throttle(fn, limit) {
  let lastCalledAt = 0;
  let timer = null;
  return function (...args) {
    const remaining = limit - (Date.now() - lastCalledAt);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      lastCalledAt = Date.now();
      fn.apply(this, args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastCalledAt = Date.now();
        timer = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}

// ---

// ### Final mental model

```
THROTTLE is like a water tap with a flow regulator

Without throttle:
  turn tap → water GUSHES out uncontrolled 💧💧💧💧💧

With throttle:
  turn tap → water flows at STEADY rate 💧...💧...💧
  no matter how much you turn → same steady flow
  regulator controls maximum rate

fn     = water
limit  = regulator setting (300ms)
calls  = turning the tap
result = steady controlled output
```;

// ### debounce vs throttle — when to use what

// | Scenario                              | Use |
// |--------|                              |-----|
// | Search input API call      | `debounce` — wait for user to stop |
// | Scroll position tracking   | `throttle` — regular updates |
// | Window resize recalculate  | `debounce` — wait until done resizing |
// | Mouse move tracking        | `throttle` — regular updates |
// | Button spam protection     | `throttle` — allow once per interval |
// | Form auto-save             | `debounce` — wait until stopped typing |
// | Infinite scroll trigger    | `throttle` — check regularly |
// | Validate input on type     | `debounce` — wait until stopped |
