function Calculator(){
this.x = 0;
this.y = 0;
    this.read =  function () {
    
        x = +prompt(`Enter input 1:`);
        y = +prompt(`Enter input 2:`);
    };
    this.sum = function (){
       return x+y;
    };
    this.mul = function(){
        return x*y;
    };
}

let calculator1 = new Calculator();
calculator1.read();
alert(calculator1.sum());
alert(calculator1.mul());
