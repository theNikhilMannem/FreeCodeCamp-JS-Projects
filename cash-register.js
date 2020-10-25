/*
Problem Statement ::
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/


function checkCashRegister(price, cash, cid) {
  var change = {
    status: "",
    change: []
  };

  let currencyConverter = (type, dollarValue) => {
    if (dollarValue != null) {

    let dollarsInDrawer = 0;

      if (type === "PENNY") {
        dollarsInDrawer += dollarValue/(0.01); // 0.01 is the value of a Penny in terms of dollar.
      }

      if (type === "NICKEL") {
         dollarsInDrawer += dollarValue/(0.05); // 0.05 is the value of a Nickel in terms of dollar.
      }

      if (type === "DIME") {
        dollarsInDrawer += dollarValue/(0.1); // 0.1 is the value of a Dime in terms of dollar.
      }

      if (type === "QUARTER") {
        dollarsInDrawer += dollarValue/(0.25); // 0.25 is the value of a Quarter in terms of dollar.
      }

      if (type === "ONE") {
        dollarsInDrawer += dollarValue; // The value is 1 as ONE dollar equals dollar.
      }

      if (type === "FIVE") {
        dollarsInDrawer += dollarValue/5 // $5 notes multipled by units.
      }

      if (type === "TEN") {
        dollarsInDrawer += dollarValue/10; // $10 notes.
      }

      if (type === "TWENTY") {
        dollarsInDrawer += dollarValue/20; // $20 notes.
      }

      if (type === "HUNDRED") {
        dollarsInDrawer += dollarValue/100; // $100 notes.
      }

      return dollarsInDrawer;
    }
    else {
      return "Empty Units!!";
    }
  }

  let cashInDrawer = 0;

  for (let each in cid) {
    cashInDrawer += cid[each][1];
    // console.log(cashInDrawer);
  }

  let changeAmount = cash - price;
  
  // If the change amount to be returned exists!
  if (changeAmount > 0) {
  
    // If the change amount is equal to cha-in-drawer, then it's closed with returning the status and the cid array!
    if (changeAmount === cashInDrawer) {
      change.status = "CLOSED";
      change.change = cid;
      return change;
    }
    
    // If the change amount is more than the cash-in-drawer, obviously, it means 'Insufficient Funds'.
    else if (changeAmount > cashInDrawer) {
      console.log(cashInDrawer)
      change.status = "INSUFFICIENT_FUNDS";
      return change;
    }
    
    // Well! If none of the above are the cases, it's time for us to wrap it up for the real game!!
    // Check each array of the 'cid' 2-D array once, and move on through currency units: highest to lowest, i.e. the highest value currency unit comes first it is equal to or lesser than the actual change amount which is decumulated through the iterations based on the conditions.
    else {
      change.status = "OPEN";
      let changeList = [];
      // Flag values of type boolean, to stop a currency unit from iterated more than once!
      let pennyFlag = true, nickelFlag = true, dimeFlag = true, quarterFlag = true, dollarFlag = true, fiveFlag = true, tenFlag = true, twentyFlag = true, hundredFlag = true;
      
      while (changeAmount > 0) {

        if (changeAmount >= 100 && hundredFlag) {
          if (cid[8][1] != null) {
            let pushAmount = 0;
            while (changeAmount >= 100) {
              if (pushAmount < cid[8][1]) {
                changeAmount -= 100;
                pushAmount += 100;
              }
              else {
                break;
              }
            }
            // changeAmount = Math.round(changeAmount);
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            changeList.push([cid[8][0], pushAmount]);
            continue;
          }
          else {
            return "hundreds empty!";
          }
        }

        if (changeAmount >= 20 && twentyFlag) {
          twentyFlag = false;
          if (cid[7][1] != null) {
            let pushAmount = 0;
            while (changeAmount >= 20) {
              if (pushAmount < cid[7][1]) {
                changeAmount -= 20;
                pushAmount += 20;
              }
              else {
                break;
              }
            }
            // changeAmount = Math.round(changeAmount);
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            changeList.push([cid[7][0], pushAmount]);
            continue;
          }
          else {
            return "twenties empty!";
          }
        }

        if (changeAmount >= 10 && tenFlag) {
          tenFlag = false;
          if (cid[6][1] != null) {
            let pushAmount = 0;
            while (changeAmount >= 10) {
              if (pushAmount < cid[6][1]) {
                changeAmount -= 10;
                pushAmount += 10;
              }
              else {
                break;
              }
            }
            // changeAmount = Math.round(changeAmount);
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            changeList.push([cid[6][0], pushAmount]);
            continue;
          }
          else {
            return "tens empty!";
          }
        }

        if (changeAmount >= 5 && fiveFlag) {
          fiveFlag = false;
          if (cid[5][1] != null) {
            let pushAmount = 0;
            while (changeAmount >= 5) {
              if (pushAmount < cid[5][1]) {
                changeAmount -= 5;
                pushAmount += 5;
              }
              else {
                break;
              }
            }
            // changeAmount = changeAmount;
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            changeList.push([cid[5][0], pushAmount]);
            continue;
          }
          else {
            return "fives empty!";
          }
        }

        if (changeAmount >= 1 && dollarFlag) {
          dollarFlag = false;
          if (cid[4][1] != null) {
            let pushAmount = 0;
            while (changeAmount >= 1) {
              if (pushAmount < cid[4][1]) {
                changeAmount -= 1;
                pushAmount += 1;
              }
              else {
                break;
              }
            }
            // changeAmount = changeAmount;
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            changeList.push([cid[4][0], pushAmount]);
            continue;
          }
          else {
            return "ones empty!";
          }
        }

        if (changeAmount >= 0.25 && quarterFlag) {
          quarterFlag = false;
          if (cid[3][1] != null && cid[3][1] != 0) {
            let pushAmount = 0;
            while (changeAmount >= 0.25) {
              if (pushAmount < cid[3][1]) {
                changeAmount -= 0.25;
                pushAmount += 0.25;
              }
              else {
                break;
              }
            }
            // changeAmount = Math.round(changeAmount);
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            changeList.push([cid[3][0], pushAmount]);
            continue;
          }
          else {
            continue;
            return "quarters empty!";
          }
        }

        if (changeAmount >= 0.1 && dimeFlag) {
          dimeFlag = false;
          if (cid[2][1] != null && cid[2][1] != 0) {
            let pushAmount = 0;
            while (changeAmount >= 0.1) {
              if (pushAmount < cid[2][1]) {
                changeAmount -= 0.1;
                pushAmount += 0.1;
              }
              else {
                break;
              }
            }
            // changeAmount = Math.round(changeAmount);
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            changeList.push([cid[2][0], pushAmount]);
            continue;
          }
          else {
            continue;
            return "dimes empty!";
          }
        }

        if (changeAmount >= 0.05 && nickelFlag) {
          nickelFlag = false;
          if (cid[1][1] != null && cid[1][1] != 0) {
            let pushAmount = 0;
            while (changeAmount >= 0.05) {
              if (pushAmount < cid[7][1]) {
                changeAmount -= 0.05;
                pushAmount += 0.05;
              }
              else {
                break;
              }
            }
            changeAmount = Math.round(changeAmount);
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            changeList.push([cid[1][0], pushAmount]);
            continue;
          }
          else {
            continue;
            return "nickels empty!";
          }
        }

        if (changeAmount >= 0.01 && pennyFlag) {
          pennyFlag = false;
          if (cid[0][1] != null && cid[0][1] != 0) {
            let pushAmount = 0;
            while (changeAmount >= 0.01) {
              if (pushAmount < cid[0][1]) {
                changeAmount -= 0.01;
                pushAmount += 0.01;
              }
              else {
                break;
              }
            }
            // pushAmount += changeAmount;
            // changeAmount = Math.round(changeAmount);
            console.log("changeAmount: "+changeAmount);
            console.log("pushAmount: "+pushAmount);

            // Since any values around 0.00* are possibly the round off possibilities of Penny. (Eg: Penny is 0.05th of a dollar, so, 0.00* is the possible Math.round() values that we could have left without rounding off (and/or it's not quite a good approach rounding off before pennies))
            //Setting changeAmount value between 0.009 and 0.01 could help us recover any leftovers in the iterations and that being by making sure it's a roundoff to the value of a penny.
            if (changeAmount == 0 || changeAmount < 0.01 && changeAmount > 0.009) {
              if (changeAmount < 0.1 && changeAmount > 0) {
                //Since the Penny is a unit that can constitute any currency unit!
                pushAmount += 0.01;
              }
              changeList.push([cid[0][0], pushAmount]);
            }
            else {
              // Handling the case when change is lesser than cash in drawer, but, not the exact change available!
              change.status = "INSUFFICIENT_FUNDS";
              change.change = [];
            }
            continue;
          }
          else {
            return "pennies empty!";
          }
        }
      }
      change.change = changeList;
      return change;
    }
  }
  
  return change;
}
