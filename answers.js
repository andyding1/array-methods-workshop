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

/******EXERCISE 2******/
function getPositives(array){
    var positiveArray2 = [];
    positiveArray2 = array.filter(function(number){
        return number>0;
    });
    console.log(positiveArray2);
}
//Test
var testArray = [-1,2,-3,4,-5,6];
getPositives(testArray);
