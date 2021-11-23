function someFn(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase() 
}

console.log(someFn('пеТя'));

function sayHello(text) {
  return 'Hello' + ', ' + text
}

console.log(sayHello('Mark'));


let arr = ['dk cd dch djhc','dchbd','aaaa','aaaa']


function filterStr () {
  let arr = [];
    for ( i = 0; i < arr[i].length; i++) {
      if(arr[i].length < 5){
        return true
      }
        
    }
}

console.log(filterStr(arr))

// let result = arr.filter(function(a){
//   arr.length = 5;
//   return arr.indexOf(a.length) < 5;
  
// }); 

// let result = arr.map(function(elem) {
// 	return elem.length < 4;
// });

console.log(result);











