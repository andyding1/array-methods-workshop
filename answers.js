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
    var obj = {highest:-Infinity, lowest:Infinity};
    var objDetermine = array.reduce(function(acc, n){
        if(n>acc.highest){
            acc.highest=n;
        }
        if(n<acc.lowest){
            acc.lowest=n;
        }
        return acc;
    }, obj)
    
    return objDetermine;
}
//Test
testArray = [1, -10, 20, 40, 5];
console.log(highLow(testArray));

/******EXERCISE 7******/
function highLowTwo(array){
    var obj = {highest:-Infinity, secondHighest:-Infinity,  lowest:Infinity, secondLowest:Infinity};
    var objDetermine = array.reduce(function(acc, n){
        
        if(n>acc.highest){
            acc.secondHighest=acc.highest;
            acc.highest=n;
        }
        else if(n>acc.secondHighest){
            acc.secondHighest = n;
        }
        if(n<acc.lowest){
            acc.secondLowest=acc.lowest;
            acc.lowest=n;
        }else if(n<acc.secondLowest){
            acc.secondLowest=n;
        }
        return acc;
    }, obj)
    
    return objDetermine;
}
//Test
testArray = [1,2];
console.log(highLowTwo(testArray));

/******EXERCISE 8******/
function countChars(string){
    var obj = {};
    var characterArray = string.toLowerCase().split("");
    characterArray = characterArray.filter(function(char){
        return char !== ' '; 
    });
    characterArray.forEach(function(char){
        var characterCount = characterArray.reduce(function(acc, element){
            if(char===element){
                acc++;
            }
            return acc;
        }, 0);
        obj[char] = characterCount;
    });
    console.log(obj);
}
//Test
countChars("hello world");

/******EXERCISE 9******/
var database = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
];

function peopleById(array){
    return array.reduce(function(acc,n){
        acc[n.id] = n;
        return acc;
    }, {});
}
//Test
console.log(peopleById(database));

/******EXERCISE 10******/
function peopleByFirstName(array){
    return array.reduce(function(acc,n){
        if(acc[n.firstname] !== n.firstName){
            acc[n.firstName] = n;
        } 
        acc[n.firstName] = n;
        return acc;
    }, {});
}