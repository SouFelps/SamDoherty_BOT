module.exports = ({
 name:"reverter",
 code:`$if[$checkContains[$message;enoyreve@;ereh@]==true]
 
 Imagine trying to ping everyone, and here.. in reverse. Nice try, idiot.
 
 $else
 
 $reverse[$message]
 
 $endif

$argsCheck[>1;Any texts to reverse? Please try again!]`
})  //Reverses messages.