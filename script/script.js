let num = 266219;

let arr = num.toString().split('');
let result = arr.reduce(function(sum, current) {
    return sum * current;
  });
console.log(result);

let exp = result ** 3;

alert(exp.toString().slice(0, 2)); 
