$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ');
}

function fizzBuzz( newNumber ){
    let answer='';
    if (newNumber%3===0){
       answer+='Fizz';
    }
    if (newNumber%5===0){
        answer+="Buzz";
    }
    else if ((newNumber%3!=0) && (newNumber%5!=0)){
        answer+=newNumber;
    }
    return answer;
}

console.log(fizzBuzz( 10 ));
console.log(fizzBuzz ( 9 ));
console.log(fizzBuzz ( 15 ));
console.log(fizzBuzz (23));