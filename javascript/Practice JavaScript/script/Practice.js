var a = {
    fName: 'Neha',
    lName: 'Parnerkar',
    rollNumber: 23,
    y: {
        SSN: 45,
        rollNo: 67,
        x:{
            Present: false,
            PhoneNo: 490824
        }
    }
};

var b = {
    palce: "Bhopal",
    place2: "Gwalior",
    home: "USA"

};

console.log(b);
console.log(a);
console.log(a.y);
console.log(a.y.x);
//IFEE Construct
(function(){
    var global = 11;
    function sum(){     //if have to define local in the console we have to define like the given equation
        var local = 02           // we cannot simply say console.log(local)
        sum = sum();
           }
           console.log(sum);
    console.log(global);
})();

//console.log(global);  //out side the scope of the function will give error not defined or undefined.