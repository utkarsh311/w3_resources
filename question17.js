/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
//question 17
function check(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(check({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));
