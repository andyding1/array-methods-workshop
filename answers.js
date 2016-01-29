/******EXERCISE 1******/
function printPositives(array){
    var positiveArray = [];
    array.forEach(function(number){
        if(number>0){
            positiveArray.push(number)
        }
    });
    console.log(positiveArray);
}
//Test
var testArray = [-1,5,10,-9,20,-100];
printPositives(testArray);