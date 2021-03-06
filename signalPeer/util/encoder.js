
function toByte(message) {
	var buffer = [];
	for(var i=0;i<message.length;i++) {
		buffer.push(message.charCodeAt(i))
	}
	return buffer;
}

function toString(buffer) {
	var message = "";
	for(var i=0;i<buffer.length;i++) {
	    message+=String.fromCharCode(buffer[i]);
	}
	return message;
}

function toURLEncode(buffer) {
	var message = "";
	var pattern = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	for(var i=0;i<buffer.length;i++) {
	    message+="%";
	    message+=pattern[(0xF&buffer[i]>>4)];
	    message+=pattern[(0xF&buffer[i])];
	}
	return message;
}

function toURLDecode(message) {
	var buffer = [];
	var pattern = {"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"A":10,"B":11,"C":12,"D":13,"E":14,"F":15};
	for(var i=0,j=0;i<message.length;j++) {
		i++;//%
		buffer[j] = pattern[message[i]];i++;
		buffer[j] = buffer[j]<<4|pattern[message[i]];i++;
	}
	return buffer;
}
/*
console.log(toByte("hello"));
console.log(toString(toByte("hello")));
console.log(toURLEncode(toByte("hello")));
console.log(toURLDecode(toURLEncode(toByte("hello"))));
*/
