$( document ).ready( onReady );

function onReady(){;
    $( `#newNumberButton` ).on( 'click', fizzBuzz);
}

function fizzBuzz( newNumber ){
    newNumber=$( '#newNumberBox' ).val();
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
    console.log(answer);
    return answer;
}

// console.log(fizzBuzz( 10 ));
// console.log(fizzBuzz ( 9 ));
// console.log(fizzBuzz ( 15 ));
// console.log(fizzBuzz (23));

//place for someone to enter the number: text field
//button to submit
//place to display the answer: p tag

//create a function that will take the number input from the new number box and use it in the function


//when the button is clicked, run the function
//create a p tag to display the results