# Unexpected Counter Behavior in useEffect with setTimeout

This repository demonstrates an unusual React 19 issue related to using `setTimeout` within a `useEffect` hook that updates a state variable.  The counter does not increment smoothly at the intended intervals of one second, even though the code looks correct at first glance.

The problem lies in the way the `setTimeout` interacts with the `useEffect`'s dependency array and state updates.  The solution demonstrates how to use `useRef` to manage the interval properly and resolve the erratic behavior.

## How to Reproduce

Clone the repository and run `npm install`. Then, run `npm start` to launch the development server. You'll observe that the counter increases inconsistently, rather than at a one-second interval.