//Task1 
// add(min) function to the prototype of array 
// min should rhe smallest value in array of integers 

let arr = [1, 9, -8, -11, 4, 3];
Array.prototype.min = function () {
    let min = this[0];
    this.map((e) => {
        if (e < min)
            min = e;
    });
    return min;
}
console.log(arr.min())



//Task2
// add(customFilter) function to the prototype of array
// customFilter should  return  only items that pass its callback in new array     

Array.prototype.customFilter = function (collback) {
    let list = [];
    this.forEach((e) => {
        if (collback(e))
            list.push(e);
    });
    return list;
}

console.log(arr.customFilter(function (e) { return e % 2 == 0 }))

//Task3
// add(customFill) function to the prototype of array
// customFill should  fill  the  array with  the value passed to customfill and new array   

Array.prototype.customFill = function (collback) {
    let list = [];
    this.forEach((e) => {
        let template = collback;
        e = template;
        list.push(e);
    });
    return list;
}

console.log(arr.customFill("dina"))


