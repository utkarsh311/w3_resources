/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// QUESTION 11
function list_properties(obj)  
{
 return Object.getOwnPropertyNames(obj);
}

console.log(list_properties(String));

console.log(list_properties(Array));

