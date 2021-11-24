function someFn(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase() 
}

console.log(someFn('пеТя'));

function sayHello(text) {
  return 'Hello' + ', ' + text
}

console.log(sayHello('Mark'));


let array = ['i love js','hello world','i love react']


function result(arr){
  for(i = 0; i < arr.length; i++){
    if(arr[i].length <= 9){
      console.log(arr[i])
    }
  }
}

result(array)

console.log(result);











