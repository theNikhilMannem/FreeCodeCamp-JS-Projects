/*
A simplified and less stack occupying version of the 'palindrome-checker.js'
This version doesn't use an inner function to return a flag value to check it with the original function!
Yet, it's always good to defined inner functions for some complex functions where we would need some sort of flag values to check for in the procedure of the program.
In case you ain't aware of it already, "flag" values are those that store a value (any data type, including boolean) and is used in a further step in the execution of a program to evaluate and/or compare to some other value or variable to return a required outcome from the context it's used in!
*/

function checkPalindrome(string) {
  string = string.replace(/[^A-Za-z0-9]/g, "");
  console.log("string replaced: "+string);
  for (let index = string.length - 1; index >= 0; index--) {
    console.log(string[index].toLowerCase());
    reverseStr += string[index].toLowerCase();
  }
  console.log("string: "+string);
  console.log("reverseStr: "+reverseStr);
  if (string.toLowerCase() === reverseStr) {
    return true;
  }
  return false;
}
