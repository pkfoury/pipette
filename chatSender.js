var util = require('util')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { util.puts(stderr); util.puts(stdout); }

function sendMessage(txt, guid) {
	var cmd = 'osascript tools/send_message.applescript "'+guid+'" "'+txt+'"';
	console.log(cmd);
	exec(cmd, puts);
}


exports.sendMessage = sendMessage;
