buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde
//console.log(buf.toJSON());

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer1 : " + buffer1);
console.log("buffer3 content: " + buffer3.toString());

var buffer4 = new Buffer('TutorialsPoint ');
var buffer5 = new Buffer('Simply Easy Learning');
console.log(buffer4.compare(buffer5));

var buffer6 = new Buffer('ABC');

//copy a buffer
var buffer7 = new Buffer(3);
buffer6.copy(buffer7);
console.log("buffer7 content: " + buffer7.toString());

var buffer8 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer9 = buffer1.slice(0,7);
console.log("buffer9 content: " + buffer9.toString());

var buffer10 = new Buffer('TutorialsPoint');

//length of the buffer
console.log("buffer10 length: " + buffer10.length);