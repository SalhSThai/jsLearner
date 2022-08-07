function Accumulator(startingValue){
    this.currentValue = startingValue;
    this.read = function(){
        this.currentValue = this.currentValue + +prompt(`Add value: `);
    };
    this.show = function(){
        alert(`Now current value : ${this.currentValue}`);
    };
}

let accumulator1 = new Accumulator(0);
accumulator1.read();
accumulator1.show();
accumulator1.read();
accumulator1.show();