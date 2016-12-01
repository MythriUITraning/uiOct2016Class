// Objects
var a = {
    Fname: 'Neha',
    rollNumber: 23,
    b: {
        Lname: 'Parnerkar',
        rollNumber: 29,
        c: {
            fullname: 'Neha Parnerkar',
            rollNumber: 21
        }
    }
};

//a different variable
var x = {
    Fname: 'Prathamesh Parnerkar',
    rollNumber: 13
};

//changing the values of variable a by dot notation
a.b.Fname = 'Mayur';

x.rollNumber = 17;

// changing the values of the variable with the help of property notation
a['Fname']= 'Prathamesh';
a.b['Lname']= 'Mayur';
a.b.c['fullname']= 'Prathamesh Parnerkar';

console.log(a);
console.log(a.b);
console.log(a.b.c);
console.log(x);