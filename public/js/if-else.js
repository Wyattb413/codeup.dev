"use strict";

//Grade Problem

    function gradeAvg (grade1, grade2, grade3) {
        var gradeAvg = ((grade1 + grade2 + grade3) / 3);
        if (gradeAvg >= 80) {
            return "You're Awesome!";
        } else {
            return "You Need to Practice More!";
        }
    }
    console.log(gradeAvg(75, 90, 80));
    console.log(gradeAvg(25, 50, 60));
    console.log(gradeAvg(80, 15, 78));


//Heb Problem

    var total;

    //Function for deciding whether or not discount will be applied
    function wasDicountApplied (amountPaid, nameOfCustomer, discount, discountBreakPoint) {
        if (amountPaid > discountBreakPoint) {
            total = (amountPaid - (amountPaid * discount)) 
            // console.log("Amount " + nameOfCustomer + " Owes" + " $" + amountPaid + ", Discount was Applied" + ", Final Payment: " + "$" + parseFloat(total).toFixed(2)) 
            return "Amount " + nameOfCustomer + " Owes" + " $" + amountPaid + ", Discount was Applied" + ", Final Payment: " + "$" + parseFloat(total).toFixed(2)
        } else {
            total = (amountPaid)
            // console.log("Amount " + nameOfCustomer + " Owes" + " $" + amountPaid + ", Discount was Not Applied" + ", Final Payment: " + "$" + total)
            return "Amount " + nameOfCustomer + " Owes" + " $" + amountPaid + ", Discount was Not Applied" + ", Final Payment: " + "$" + total
        }
    }
    //Displaying indivisual customer's total
    var ryan = wasDicountApplied (250, "Ryan", .35, 200);
    console.log(ryan)
    var cameron = wasDicountApplied (180, "Cameron", .35, 200);
    console.log(cameron)
    var george = wasDicountApplied (320, "George", .35, 200);
    console.log(george)

//Friend Problem
    function shouldBuyHouseOrCar() {
        if (flipACoin() == 1) {
            return("Buy a House")
        } else {
            return("Buy a Car")
        }
    }
    function flipACoin() {
        var flipACoin = Math.floor(Math.random()* 2);
        return flipACoin;
    }
    console.log(shouldBuyHouseOrCar());








