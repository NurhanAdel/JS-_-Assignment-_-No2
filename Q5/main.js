var num1 = window.prompt("ENTER FRIST NUMBER !");
var num2 = window.prompt("ENTER SECOND NUMBER !!");
var num3 = window.prompt("ENTER THRID NUMBER !!!");



function getElement (num1,num2,num3){

    // to calculate the maximum of the three numbers using Math.max().
    var getMax = Math.max(num1,num2,num3);
    console.log("Max Element =",getMax);

   // to calculate the min of the three numbers using Math.min().
    var getMin = Math.min(num1,num2,num3);
    console.log("Min Element =",getMin);

}
 
// to call the function by its name to run the code 
getElement (num1,num2,num3);