(function(){
    //defining calss called total
    function total(){
        var _cal = this;
        _cal.addition = 0;
        _cal.substract = 0;
        _cal.product = 0;
        _cal.dividend = 0;
        // defining another class called mathematics inside the total class
        function mathematics(x , y){
            var _mat = this;
            _mat.sum = function(){
                return (x + y)
            };
            _mat.difference = function(){
                return(x - y)
            };
            _mat.multiplication = function(){
                return(x * y)
            };
            _mat.division = function(){
                return(x / y)
            };
        }
            var num = new mathematics(11 , 2);
            _cal.addition = num.sum();
            _cal.substract = num.difference();
            _cal.product = num.multiplication();
            _cal.dividend = num.division();
            console.log(num);
    }
        var ans = new total();
        console.log(ans);
})();