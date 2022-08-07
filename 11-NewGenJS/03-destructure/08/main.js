

const data  = {
    user: {
        firstName:'sarah',
        lastName:'Sab',
        age:30
        
        }

}

function check({user}){
    const {firstName,lastName,age} = user//?
    if(age > 18){
console.log(`Hello ${firstName} ${lastName}`)//?
    }
    else{
        console.log(`You Not Allow`);
    }

}
check(data);