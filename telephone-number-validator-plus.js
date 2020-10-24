/*
Just a minor change to the 'telephone-number-validator.js' where I have used escape characters for '-(hyphen)' too to make sure hyphen is escaped from being an regex opearator in the context.
*/

/*
Explanation of Regular Expression ::

- As we start, we would look for 1 (Country code of the US) in the first place: ^ notifies to match the starting elements, then a grouping of 1\s which means the number '1' and then 'space' followed by a '?' which means that the expression part before it is optional (could or couldn't be there!), and then the group followed by a '?'.
- Moving on, we check for the first 3 digits: '()' enclosing of '\(\d{3}\)|\d{3}' means to get any one of these, which means one with parantheses and one without. \d{3} means to match the digits (0-9) and exactly 3 in total which was mentioned in '{}'.
- Then, the possibility of 'space' or - (hyphen): '[]' is a character class which encloses elements (of given number or range) that are to be matched, hence, checking for the possible '\s' (which is 'space') and '-' (hyphen). Since they are optional, we append them a '?'.
- Now, we just check for 3 digits without parantheses and the similar possibility of 'space' or - (hyphen) as above: As explained already, \d{3} is looking for exactly 3 digits followed by the possible 'space' (\s) and 'hyphen' (-) expressions, which are further followed by a '?' as they (\s and -) are optional.
- So, we reached the end of the expression where we check for the last 4 digits: We do that with \d{4}. Then, we append a '$' to ensure the format ends with the last 4 digits. Just like ^ matches the starting elements, $ does for the ending elements.

Note: The escape character (\) has been used to escape the possible operational functionality of the characters following them, which are otherwise regex operators.

*/

function telephoneCheck(str) {
  if (str != "") {
    console.log(str);
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  return false;
}
