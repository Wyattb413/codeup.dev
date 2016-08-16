"use strict";
// (function(){
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    //Declaring Varibles//
        var numbers = document.getElementsByClassName("operatorNumber");
        var signs = document.getElementsByClassName("operantSign");
        var clearAll = document.getElementById("clearAll");
        var equals = document.getElementById("equals");
        var result = "";
        var operant1String = "";
        var operant2String = "";
        var operatorString = "";
        var operantNumber;
        var operantSign;

    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    //For 1st field input (operant1string-numbers)//

        //*Checks if an operant (sign) has been pressed: if not; concatenates value of button pressed into first input field
        // if has: concatenates value of button pressed into second input field*//
            var getNumberID = function(event){
                if (document.getElementById("operator").value != "" && document.getElementById("operant1").value != "") {
                    var numberValue2 = event.target.value;
                    document.getElementById("operant2").value += numberValue2;
                } else {
                    var numberValue1 = event.target.value;
                    document.getElementById("operant1").value += numberValue1;
                }
            }

    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    //For 2nd field input (operatorString-signs)

        //*Takes value of button pressed, assigns it to operatorString, then sets operantHasBeenPressed to true for function above^^*//
            var getSignID = function(event){
                if (document.getElementById("operant1").value != "") {
                var signValue = event.target.value;
                document.getElementById("operator").value = signValue;
                } else {
                    $('#first-operant-modal').modal('show');
                }
            }

    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    //For 1st field input (operant1string-numbers)

        //*Asigns addEventListeners to each operatorNumber from HTML*//
            for (var i = 0; i < numbers.length; i += 1) {
                operantNumber = numbers[i];
                operantNumber.addEventListener("click", getNumberID);
            }

    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    //For 2nd field input (operatorString-signs)

        //*Asigns addEventListeners to each operatorSign from HTML*//
            for (var i = 0; i < signs.length; i += 1) {
                operantSign = signs[i];
                operantSign.addEventListener("click", getSignID);
            }

    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    //For ClearAll 
        
        //*Resets all values and strings to empty strings upon click of AC button*//
            var clearAllFunction = function() {
                var inputFields = document.getElementsByClassName("inputFields");
                for (i = 0; i < inputFields.length; i += 1) {
                    inputFields[i].value = "";
                }
            }

        //*Listenes for AC button press*//
            if (clearAll) {
                clearAll.addEventListener("click", clearAllFunction);
            }

    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    //For equals

        //*Switch case the checks operatorString, pairs is with appropirate math function, solves equation, sets operant1&2Strings to blank strings*//
            var equatesTo = function() {
                var numberValue1 = document.getElementById("operant1").value;
                var numberValue2 = document.getElementById("operant2").value;
                var operatorValue = document.getElementById("operator").value;
                switch (operatorValue) {
                    case "*":
                        result = parseFloat(numberValue1) * parseFloat(numberValue2)
                        break;
                    case "+":
                        result = parseFloat(numberValue1) + parseFloat(numberValue2)
                        break;
                    case "-":
                        result = parseFloat(numberValue1) - parseFloat(numberValue2)
                        break;
                    case "/":
                        result = parseFloat(numberValue1) / parseFloat(numberValue2)
                        if (numberValue2 == 0) {
                            $('#zero-modal').modal('show');
                        }
                        break;
                }
                if (numberValue2 == ""){/*check if operant 2 has be entered if equals has been pressed*/
                    $('#second-operant-modal').modal('show');
                } else if (numberValue2 != 0){/*Checks if divide by 0 was entered and clear left operant instead of displaying result*/
                    document.getElementById("operant1").value = result;
                } else {
                    document.getElementById("operant1").value = "";
                }

                document.getElementById("operant2").value = "";
            }

        //*Adds eventListener to equal sign*//
            if (equals) {
                equals.addEventListener("click", equatesTo);
            }

     <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

     //*checking if * / - + has been pressed*//
     var opperatorsKeyValues = {
        187: "+",
        189: "-",
        191: "/",

     }

     $(document).keyup(function(event){
            console.log(event);
        });



// })();
<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
// To Do's: 

//add keyup listener to insert numbers in 1st and 3rd input fields
//add key up listener to insert signs in 2nd input field

    // var codeIndex = 0;

    // var konamiKeysValues = {
    //     up: 38,
    //     down: 40,
    //     left: 37,
    //     right: 39,
    //     b: 66,
    //     a: 65,
    //     enter: 13
    // };

    // var konamiCode = [
    //     konamiKeysValues.up,
    //     konamiKeysValues.up,
    //     konamiKeysValues.down,
    //     konamiKeysValues.down,
    //     konamiKeysValues.left,
    //     konamiKeysValues.right,
    //     konamiKeysValues.left,
    //     konamiKeysValues.right,
    //     konamiKeysValues.b,
    //     konamiKeysValues.a,
    //     konamiKeysValues.enter
    // ];

    // $(document).keyup(function(event){
    //     if(event.keyCode == konamiCode[codeIndex]) {
    //         codeIndex += 1;
    //     } else {
    //         codeIndex = 0;
    //     }
    
    //     if (codeIndex == konamiCode.length) {
    //         $("#game-div").removeClass("hidden");
    //     }

    // });