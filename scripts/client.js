$( document ).ready( onReady );
//hey JQ, when html doc is on the DOM, run the function onReady;

function onReady(){;
    $( `#newNumberButton` ).on( 'click', fizzBuzz);
    //hey JQ, when the newNumberButton gets clicked on, run the function fizzBuzz;
}


function fizzBuzz( newNumber ){
    newNumber=$( '#newNumberBox' ).val();
    //the input into this function should be the input in the newNumberBox, JQ do that;
    let answer='';
    //new variable that is an empty string;
    if (newNumber%3===0){
       answer+='Fizz';
       //if the number is divisible by 3, 'fizz' is added to the variable string;
    }
    if (newNumber%5===0){
        answer+="Buzz";
        //if the number is divisible by 5, 'buzz' is added to the variable string;
    }
    else if ((newNumber%3!=0) && (newNumber%5!=0)){
        answer+=newNumber;
        //else if the number is divisible by 3 and divisible by 5, 'fizzbuzz' is added to the variable string;
    }
    //once all that is figured out,
    let el= $( `#mainDiv` );
    //use JQ to assign the mainDiv to a variable;
    el.append( '<p id="answer"></p>' );
    //append a p tag to the mainDiv;
    $( `#answer` ).empty();
    //empty out the p tag (only needed if the function runs more than once)
    $( `#answer` ).append( answer );
    //append the answer to the p tag
    return answer;
}


 