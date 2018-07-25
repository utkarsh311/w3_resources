/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/* question 9 */
function area(radius)
{
  return 3.14*radius*radius;
}
function perimeter(radius)
{
 return 2* 3.14 * radius;
}
var res1=area(7);
var res2=perimeter(7);
console.log("area is"+ res1);
console.log("perimeter is" + res2);