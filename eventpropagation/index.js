//Event propagation refers to the process by which events in a web page are dispatched, handled, and propagated through the DOM (Document Object Model) hierarchy. When an event occurs on an element, such as a mouse click or a key press, the browser follows a specific order to determine which elements should receive and respond to the event.

// There are two main phases of event propagation: capturing phase and bubbling phase.

// Capturing Phase: In this phase, the browser starts from the root of the DOM tree and goes down to the target element, triggering any event listeners that are set to capture events during this phase. This phase is less commonly used and occurs before the event reaches the target element. It can be useful for global event handling or for setting up event listeners on ancestor elements.

// Target Phase: The event has reached the target element. The event listeners attached directly to the target element will be executed.

// Bubbling Phase: After the event has been handled by the target element's event listeners, the event starts to "bubble" up through the DOM tree, triggering any event listeners that are set to listen for events during the bubbling phase. This is the most common phase for event handling and is often used to capture interactions on a hierarchy of nested elements.

const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => {
  console.log("Outer div clicked");
});
middle.addEventListener(
  "click",
  () => {
    console.log("Middle div clicked");
  },
  // true, // add true as the 3rd parameter it will behave as event capturing , by default 3rd parameter is false which is for event bubbling
);

inner.addEventListener("click", (event) => {
  console.log("Inner button clicked");
  // event.stopPropagation(); //To stop event bubbling and prevent the event from propagating further
});
//Event bubbling is a concept in web development that refers to the order in which events are propagated or "bubbled" through the DOM (Document Object Model) hierarchy. When an event occurs on a particular element, like a button click, the event doesn't just affect that element but also its parent elements all the way up to the root of the document. This process of propagating the event upwards through the DOM is called event bubbling.

// In this example, we have three nested elements: an outer div, a middle div, and an inner button. Each element has a click event listener attached to it.

// When you click the "Click me" button, you might expect only the event listener on the inner button to trigger. However, due to event bubbling, all three event listeners will trigger in a specific order:

// First, the innermost element's event listener triggers:
// Output: Inner button clicked

// Then, the event bubbles up to the middle div, and its event listener triggers next:
// Output: Middle div clicked

// Finally, the event continues to bubble up to the outer div, and its event listener triggers last:
// Output: Outer div clicked

// This order of execution is due to event bubbling, where events start from the target element and propagate upwards through the DOM hierarchy. This behavior can sometimes lead to unexpected results if you're not aware of how event bubbling works.

// To stop event bubbling and prevent the event from propagating further, you can use the event.stopPropagation() method within your event listener code.

// Event capturing, also known as the capturing phase or trickling, is one of the phases of event propagation in the DOM (Document Object Model) when handling events in web development. It's the process of dispatching an event from the root of the DOM tree down to the target element. This phase occurs before the event reaches the target element and triggers its own event handlers.

// During event capturing, the browser starts from the root of the DOM hierarchy (typically the window object) and traverses down to the target element. Along the way, it checks if any elements have event listeners set to capture events during this phase. If such event listeners are found, they are executed in the order in which the elements are encountered.

// Event capturing can be useful when you want to set up global event listeners that should trigger before specific element-level event listeners, or when you want to capture events at higher levels in the DOM hierarchy, such as for delegation patterns.
