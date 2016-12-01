//IIFE CONSTRUCT
(function(){
    var GlobalVar = 11;

    function multiplication(){
        var x = (a*b);
        return x;
    };
// consoling the named function and global Variable
    console.log(multiplication(2,3));
// console the global variable
    console.log(GlobalVar);
//Explaining Anonymous Function

    var x = function(y,z){
        var n = y + z;
        return n;
    };
// consoling the Anonymous Function
    console.log(x(23,2));
})();