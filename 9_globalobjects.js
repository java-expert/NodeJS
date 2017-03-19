console.log( __filename );
console.log( __dirname );
function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
//var t=setTimeout(printHello, 5000);

//clearTimeout(t);

var r=setInterval(printHello, 5000);

clearInterval(r);