/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       id: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       id: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       id: 3245
   }];
var i,j,temp;
var n=library.length;

for(j=0;j<n-1;j++)
  {
    for(i=0;i<n-j-1;i++)
      {
        if(library[i].id < library[i+1].id)
          {
            temp=library[i+1];
            library[i+1]=library[i];
            library[i]=temp;
          }
      }
  }
console.log(library);




/*
Exception: TypeError: library[(i + 1)] is undefined
@Scratchpad/10:33:1
*/
/*
Exception: TypeError: library[(i + 1)] is undefined
@Scratchpad/10:33:1
*/