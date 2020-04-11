 //Name function
// function testExample(){
 //    var greeting = "Hi! My name is Giles"
 //    console.log("greeting")
 // }
 //testExample();

 //function testExample(){
    //var greeting = "Hi! My name is Giles"
    //return greeting;
// }
//testExample();
//console.log(testExample())

//* /function testExample(a){
   // var greeting = "Hi! My name is " + a;
   // return greeting;
 //}
//console.log(testExample("Giles")) */

//Anonymous Function

// var testExample = function (a) {
//     var greeting = "Hi! My name is ";
//     return greeting;
// }
// var a = "Giles"
//   console.log(testExample(a));

//Immediately invoked functional expression

// 

//Practice Javascript making calculator

 

function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add") {
        calculate = a + b;
    }   else if (op == "min"){
        calculate = a-b;
    } else if(op = "div"){
        calculate = a / b;
        } else if (op == "mul"){
            calculate = a * b;
        }
        console.log(a + b)

    }
