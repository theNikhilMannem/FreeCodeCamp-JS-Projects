/*
Problem Statement ::
Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

    //Returns the Roman Numeral for an individual number of a given number (if given number if "1", care for only "1".)
    let romanNum = function(number, place) {
        //If the place of the number passed as a parameter is "ones" in the original number (given number in the original function).
        if (place === "ones") {
            return number == 0 ? "" : number == 1 ? "I" : number == 2 ? "II" : number == 3 ? "III" : number == 4 ? "IV" : number == 5 ? "V" : number == 6 ? "VI" : number == 7 ? "VII" : number == 8 ? "VIII" : number == 9 ? "IX" : "something wooong, coopeh'!";
        }
        //If the place of the number passed as a parameter is "tens" in the original number (given number in the original function).
        else if (place === "tens") {
            return number == 0 ? "" : number == 1 ? "X" : number == 2 ? "XX" : number == 3 ? "XXX" : number == 4 ? "XL" : number == 5 ? "L" : number == 6 ? "LX" : number == 7 ? "LXX" : number == 8 ? "LXXX" : number == 9 ? "XC" : "something wooong with "+place+", coopeh'!";
        }
        //If the place of the number passed as a parameter is "hundreds" in the original number (given number in the original function).
        else if (place === "hundreds") {
            return number == 0 ? "" : number == 1 ? "C" : number == 2 ? "CC" : number == 3 ? "CCC" : number == 4 ? "CD" : number == 5 ? "D" : number == 6 ? "DC" : number == 7 ? "DCC" : number == 8 ? "DCCC" : number == 9 ? "CM" : "something wooong with "+place+", coopeh'!";
        }
        //If the place of the number passed as a parameter is ones in the original number (given number in the original function).
        //Assumes that the value of thousands (of the given number in the original function) to be only upto three thousand (3000), not more than 4000 (as per the problem statement and test case consideration).
        else if (place === "thousands") {
            return number == 0 ? "" : number == 1 ? "M" : number == 2 ? "MM" : number == 3 ? "MMM" : "something wooong with "+place+", coopeh'!";
        }
    };

    //Testing the romanNum() function: You'd see the returned result if you run this program on a browser and check the console.
    console.log("romanNum(9, "hundreds): "+romanNum(9, "hundreds"));

    //Converting the given number to string using toString() for the comfort of iterating through it.
    let numStr = num.toString();

    //Declaring an empty array to be later filled by the Roman Numerals returned by romanNum() function when iterated through the elements (each number) of numStr (original number-turned-string)
    let formRomanNum = [];

    //Checking for conditions in terms of length of numStr so as to push() the Roman Numeral equivalents of the numbers based on their place in the original number,
    //i.e., for example, 547 is the original number passed into the convertToRoman() function => convertToRoman(547) : that means 7 is in the "ones" place, 4 is in the "tens" place, and 5 is in the "hundreds" place.
    //This is a good way to independently return the Roman Numerals and then, pushing (push()) them into the array defined earlier which is 'formRomanNum'.
    if (numStr.length === 1) {
        formRomanNum.push(romanNum(parseInt(numStr[0]), "ones"));
    }
    else if (numStr.length === 2) {
        formRomanNum.push(romanNum(parseInt(numStr[0]), "tens"));
        formRomanNum.push(romanNum(parseInt(numStr[1]), "ones"));
    }
    else if (numStr.length === 3) {
        formRomanNum.push(romanNum(parseInt(numStr[0]), "hundreds"));
        formRomanNum.push(romanNum(parseInt(numStr[1]), "tens"));
        formRomanNum.push(romanNum(parseInt(numStr[2]), "ones"));
    }
    else if (numStr.length === 4) {
        formRomanNum.push(romanNum(parseInt(numStr[0]), "thousands"));
        formRomanNum.push(romanNum(parseInt(numStr[1]), "hundreds"));
        formRomanNum.push(romanNum(parseInt(numStr[2]), "tens"));
        formRomanNum.push(romanNum(parseInt(numStr[3]), "ones"));
    }
    
    return formRomanNum.join("");
}
