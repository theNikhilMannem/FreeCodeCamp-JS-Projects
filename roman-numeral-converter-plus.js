/*
A more complex version of the "Roman Numeral Converter" using a for loop which iterated to find the elements automatically without explicitly conditioning based on the length of the number (given number-turned-string for iteration purposes).
Note: This code could be easily scalable further in case of a larger input size, i.e., ten thousands and more.
*/

function convertToRoman(num) {

    //Returns the Roman Numeral for an individual number of a given number (if given number if "1", care for only "1".)
    let romanNum = function(number, place) {
        if (place === "ones") {
            return number == 0 ? "" : number == 1 ? "I" : number == 2 ? "II" : number == 3 ? "III" : number == 4 ? "IV" : number == 5 ? "V" : number == 6 ? "VI" : number == 7 ? "VII" : number == 8 ? "VIII" : number == 9 ? "IX" : "something wooong"+place+", coopeh'!";
        }
        else if (place === "tens") {
            return number == 0 ? "" : number == 1 ? "X" : number == 2 ? "XX" : number == 3 ? "XXX" : number == 4 ? "XL" : number == 5 ? "L" : number == 6 ? "LX" : number == 7 ? "LXX" : number == 8 ? "LXXX" : number == 9 ? "XC" : "something wooong with "+place+", coopeh'!";
        }
        else if (place === "hundreds") {
            return number == 0 ? "" : number == 1 ? "C" : number == 2 ? "CC" : number == 3 ? "CCC" : number == 4 ? "CD" : number == 5 ? "D" : number == 6 ? "DC" : number == 7 ? "DCC" : number == 8 ? "DCCC" : number == 9 ? "CM" : "something wooong with "+place+", coopeh'!";
        }
        // Assumes that the value of thousands to be only upto three thousand (3000), not more than 4000.
        else if (place === "thousands") {
            return number == 0 ? "" : number == 1 ? "M" : number == 2 ? "MM" : number == 3 ? "MMM" : "something wooong with "+place+", coopeh'!";
        }
    };

    console.log(romanNum(9, "hundreds"));

    // Converting the given number to string using toString() for the comfort of iterating through it.
    let numStr = num.toString();

    // An empty array to add up the 'Roman Numerals' while iterating the loop, and returned in the end by joining into a string by using 'join()' function.
    let formRomanNum = [];

    let onesCount = numStr.length - 1, tensCount = numStr.length - 2, hundredsCount = numStr.length - 3, thousandsCount = numStr.length - 4;

    // Flag varible to stop the "ones" to be iterated more than once (as 'onesCount' is compared to the 'index' varible which is an iterator, it cluld potentially cause to enter 'ones' condition more than once).
    let boolFlag = true;

    // The loop to run through the string 'numStr' from backwards and add the elements in the front (unshift()) of the empty string 'formRomanNum'.
    for (let index = numStr.length - 1; index >= 0; index--) {
        console.log(numStr[index]);
        if (onesCount == index && boolFlag) {
            formRomanNum.unshift(romanNum(parseInt(numStr[index]), "ones"));
            boolFlag = false;
            onesCount--;
            continue;
        }
        else if (tensCount == onesCount) {
            formRomanNum.unshift(romanNum(parseInt(numStr[index]), "tens"));
            boolFlag = false;
            tensCount--;
            continue;
        }
        else if (hundredsCount == tensCount) {
            formRomanNum.unshift(romanNum(parseInt(numStr[index]), "hundreds"));
            boolFlag = false;
            hundredsCount--;
            continue;
        }
        else if (thousandsCount == hundredsCount) {
            formRomanNum.unshift(romanNum(parseInt(numStr[index]), "thousands"));
            boolFlag = false;
            thousandsCount--;
            continue;
        }
    }
    
    // Using the 'join()' function to join the array to form a string, and returning it.
    return formRomanNum.join("");
}
