function someFn(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase() 
}

console.log(someFn('пеТя'));

function sayHello(text) {
  return 'Hello' + ', ' + text
}

console.log(sayHello('Mark'));


let array = ['i love js','hello world','i love react']


let result = array.map(function(arr) {
  return arr.length <= 4
});

//  не понятно

console.log(result);











