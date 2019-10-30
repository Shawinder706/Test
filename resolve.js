/****************************************************************************************  
        
        1. Write a function that would allow you to do this                             *
                                                                                        *
        Var add = function1(6)                                                          *
        add(10)                                                                         *
        add(21)                                                                         *

*/

        //outer function
        function parentFun(x){
            //returning a function
            return function(y){
                console.log(x+y);
                console.log("working");
                
            }

        }

        var add = parentFun(6);
        add(10);



 /****************************************************************************************  
        
       2. What is wrong with the output of the following code. Fix the
            code and also explain.

            For (var i=0; i<5; i++) {  // f is in uppercase
            SetTimeout (function() {  // s is in uppercase
            Console.log(i);           // c in uppercase
            }, 3000); 

            // loop is not closed
                                    

*/

        // after correction but not acheive the desired output
        for(var i=0; i<5;i++){    

            setTimeout( function() { console.log(i) }); 
                                                        
        }   
        /* output
            5
            5
            5
            5
            5
            5 */
        // the output this code is 5 five times because the var i is gloabl here
        // in console the new i value override the previous one


        // acheive desired output

        for(var i=0;i<5;i++){

            (function(j){
                    
                setTimeout(function(){ console.log(j)},1000)

            })(i);

        }  

        /* output
            0
            1
            2
            3
            4 */

        // the output is acheived by adding the function , variable inside function work as local variable and not 
        // accesed outside the function for eg. j variable inside the function . Previously the var i is working globally
        // and  variable previous value  override by the new value of i; 



        /* 
        3. Write a function that takes a callback which handles the
            error messages if any error occurs while executing the function.
            ( You have to write a javascript code to implement a error first
            call back )

            */

           function checkError(x)
           {
               console.log(x);           
           }
           
           function checkString(x)
           {
               console.log(x);
           }
           
           function mainFun(name,callback_one,callback_two)
           {
               if(!(typeof name==='string'))
               {
                   callback_one('Please enter the character only');
               }
               else
               {
                   callback_two("click on link to confirm the registration");
               }                
           }
           mainFun('99999',checkError,checkString);
                       

 /* 4.              1. Fix the code so it prints out the alphabet A-Z in the console.

                    2. Cannot:
                    • Have any global variables at all
                    • Delete or combine any function declarations
                    • Create any new functions (except IIFEs -- hint!)
                    • Rearrange the order of declarations
                    3. Can/must:

                    • Declare extra variables (as long as they're not global)
                    • Modify (in-place) function declaration/initialization
                    • Add/remove statements/expressions (IIFEs, return,
                    params, etc)
                    • Make the fewest changes possible*/
 
                //2nd commit

                A();
                var C=function () {
                    console.log("OOPS!");
                }

                function E(f) {
                    console.log("E");
                    F();
                var f = F;
                }

                function A() {
                    console.log("A");
                    B();
                }

                var C;
                function G() {
                    console.log("G");
                    H();
                    function H() {
                        console.log("H");
                        I();
                    }
                }
                var D = d;
                function d() {
                    console.log("D");
                    E();
                } 
                function I() {
                    console.log("I");
                    J()();
                
                }

                function B() {
                    console.log("B");
                    C();
                }

                function F() {
                    console.log("F");
                    G();
                }

                var rest = "KLMNOPQRSTUVWXYZ".split("");
                for (var i=0; i<rest.length; i++) {
                (function(i){ 
                    console.log(rest[i]);
                
                })(i);
                }
                function J() {
                    return function() {
                    console.log("J");
                    //K();
                }
                }
                function C() {
                    console.log("C");
                    d();
                }


                /* 5.   Write the solution for the following problem
                    There is a button on an HTML page and we want to show users
                    information about how many times the button was clicked. We
                    could write the following code to implement this functionality: */



                    function userClickCount()
                    {

                    }
                    