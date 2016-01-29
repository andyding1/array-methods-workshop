/******EXERCISE 1******/
function printPositives(array){
    var positiveArray = [];
    array.forEach(function(number){
        if(number>0){
            positiveArray.push(number);
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

/******EXERCISE 3******/
function filterArray(array, fun){return array.filter(fun);}
//Test
function positive(num){
    return num>0;
}
var testArray=[1,-2,2,0,3,-5,4];
console.log(filterArray(testArray,positive));

/******EXERCISE 4******/
function longestWord(string){
    var stringArray = string.split(" ");
    var longest = stringArray.reduce(function(previousValue,currentValue){
        if(previousValue.length>currentValue.length){
            return previousValue;
        }
        else{
            return currentValue;
        }
    }, '');
    return longest;
}
//Test
var testString = "This phrase has superduper long word";
console.log(longestWord(testString));

/******EXERCISE 5******/
function countVowels(string){
    var characterArray = string.toLowerCase().split("");
    var vowels = characterArray.reduce(function(acc,char){
        if(['a', 'e', 'i', 'o', 'u'].indexOf(char) >= 0){
            acc++;
        }
        return acc;
    }, 0);
    return vowels;
}
//Test
testString = "Random words in this string aeiou"
console.log(countVowels(testString));

/******EXERCISE 6******/
function highLow(array){
    var obj = {highest:Infinity, lowest:-Infinity};
    var high = array.reduce(function(previousValue,currentValue){
        if(previousValue>currentValue){
            return previousValue;
        }
        else{
            return currentValue;
        }
    }, 0);
    obj.highest = high;
    var low = array.reduce(function(previousValue,currentValue){
        if(previousValue<currentValue){
            return previousValue;
        }
        else{
            return currentValue;
        }
    }, 0);
    obj.lowest = low;
    return obj;
}
//Test
testArray = [1, -10, 20, 40, 5];
console.log(highLow(testArray));

