function palindrome(str) {
  let reverseStr = "";
  
  let checkPalindrome = function(string) {
    string = string.replace(/[^A-Za-z0-9]/g, "");
    console.log("string replaced: "+string);
    for (let index = string.length - 1; index >= 0; index--) {
      console.log(string[index].toLowerCase());
      reverseStr += string[index].toLowerCase();
    }
    console.log("string: "+string);
    console.log("reverseStr: "+reverseStr);
    if (string.toLowerCase() === reverseStr) {
      return reverseStr;
    }
    return false;
  };

  if (checkPalindrome(str)) {
    return true;
  }
  return false;
}
