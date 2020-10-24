/*
*/

function rot13(str) {
  
  // An Empty array to push elements into, while checking for the ASCII values against the given string's characters.
  // In the end, this array is converted to a string (by 'join()' method) to return the result.
  let decodedStr = [];
  
  let upperCaseASCII = [];

  // Since the ASCII values for the UpperCase Alphabets start from 65 (for 'A') and end at 90 (for 'Z'), 
  // we are gonna have to have a list of those values to stop the 'decodedStr' from going beyond 90 while adding up 13 to each value.
  for (let value = 65; value <= 90; value++) {
    upperCaseASCII.push(value);
  }
  
  // Concatenating the 'upperCaseASCII' to itself to ensure the iterative addition of the values stay in the limit (ASCII value spectrum of the UpperCase Alphabets).
  upperCaseASCII = upperCaseASCII.concat(upperCaseASCII);
  
  // Just checking to confirm the concatenation without any exceptions (Not necessary, actually: 'concat()' function in JS reliably concatenates two arrays (similar or different)).
  // console.log(upperCaseASCII);

  for (let index in str) {
    // console.log(str.charCodeAt(index));

    // Checking if the characters' ASCII values are in the ASCII UpperCase limit.
    if (str.charCodeAt(index) <= 90 && str.charCodeAt(index) >= 65) {
      // Checking if the characters' ASCII value are in the upperCaseASCII list we created earlier to prevent the addition going beyond the ASCII value of 'Z', i.e., 90.
      if (upperCaseASCII.includes(str.charCodeAt(index))) {
        let decodedASCIIValue = upperCaseASCII[upperCaseASCII.indexOf(str.charCodeAt(index)) + 13];
        decodedStr.push(String.fromCharCode(decodedASCIIValue));
      }
    }
    // If the characters are not in the ASCII UpperCase limit, they are considered 'else' case: they could be punctuation and spaces (since the problem test cases are limited to UpperCase Alphabets, we don't care about handling LowerCase Alphabets that start from 97 (for 'a') and end at 122 (for 'z)).
    else {
      decodedStr.push(str[index]);
    }
  }

  // Return the 'decodedStr' after joining the list by 'join()' method which converts the list to a string.
  return decodedStr.join("");
}
