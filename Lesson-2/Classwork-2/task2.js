'use strict';

 const f = () => ++f.amountOfCallsF;
 
 f.amountOfCallsF = 0;

 console.log( f() );
 console.log( f() );
 console.log( f() );
 console.log( f() );
