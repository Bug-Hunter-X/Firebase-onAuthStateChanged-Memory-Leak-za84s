# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe.  The provided code shows how the listener can be set up, and how to properly unsubscribe to prevent memory leaks.  Improperly handling the listener can lead to performance issues and increased resource consumption, especially in applications with a high user churn.

## How to Reproduce

1. Clone this repository.
2. Install the Firebase SDK (refer to the Firebase documentation). 
3. Replace placeholders with your Firebase configuration.
4. Run the `authBug.js` file. Observe the persistent console logs even after the user signs out.  This indicates the listener is still active.
5. Run the `authBugSolution.js` file to see the proper way to handle the unsubscribing. 

## Solution

The solution involves calling the `unsubscribe()` function when the listener is no longer required (e.g., when the component unmounts or the user logs out permanently).  This releases resources and prevents unnecessary resource consumption.