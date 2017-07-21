/*function print(){
    console.log(1);
        setTimeout(function(){console.log(2);},1000);
        setTimeout(function(){console.log(3);},0);
    console.log(4);
}
print();*/

// What is o/p of this

/*var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);*/// 1undefined
/*-----------------------------------------------------------------------------*/

//multiplication
(function (){
 //defining a function
    function multiplication(a,b,c){
        var m = a*b*c;
            return m;
    };
     console.log(multiplication(2,3,4));
     console.log(multiplication(4,3,4));
})();


/*_____________________________________________________________________________________*/

//check weather the given is an array or not?

var myList = ['a','b','c','d','e','f'];
if(myList instanceof Array){
    console.log('yes');
}
else{
    console.log('no');
}
/*________________________________________________________________________*/

var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
/*___________________________________________________________________*/

var bar = true;
console.log(bar + 0);
console.log(bar + "xyz");
console.log(bar + true);
console.log(bar + false);

//Removing duplicate numbers from a given array

function removeduplicatearray (arr){
    var exits = {},
    OutArr = [],
    elm;
        for(var i = 0;i<arr.length; i++){
            elm = arr[i];
                if(!exits[elm]){
                    OutArr.push(elm);
                    exits[elm] = true;
                }
        }
    return OutArr;
}
console.log(removeduplicatearray([1,3,3,3,1,5,6,7,8,1]));


/*___________________________________________________________________*/
/*merge two sorted array*/

function mergeSortedArray(a, b){
  var merged = [],
      aEmp = a[0],
      bEmp = b[0],
      i = 1,
      j = 1;

  if(a.length ==0)
    return b;
  if(b.length ==0)
    return a;
  /*
  if aEmp or bEmp exists we will insert to merged array
  (will go inside while loop)
   to insert: aElm exists and bElm doesn't exists
             or both exists and aEmp < bEmp
    this is the critical part of the example
  */
  while(aEmp || bEmp){
   if((aEmp && !bEmp) || aEmp < bEmp){
     merged.push(aEmp);
     aEmp = a[i++];
   }
   else {
     merged.push(bEmp);
     bEmp = b[j++];
   }
  }
  return merged;
}
 console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]));
