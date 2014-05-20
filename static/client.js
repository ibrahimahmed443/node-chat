var socket = io.connect();
function addMessage(msg, name) {
	$("#chatEntries").append('<div class="message"><p>' + name + ' : ' + msg + '</p></div>');
}
function sendMessage() {
	if ($('#messageInput').val() != "") 
	{
		socket.emit('message', $('#messageInput').val());
		addMessage($('#messageInput').val(), "Me");
		$('#messageInput').val('');
	}
}
function setName() {
	if ($("#nameInput").val() != "")
	{
		socket.emit('setName', $("#nameInput").val());
		$('#chatControls').show();
		$('#nameInput').hide();
		$('#nameSet').hide();
		$("#chatEntries").show();
	}
}
socket.on('message', function(data) {
	addMessage(data['message'], data['name']);
});

$(function() {
	$("#chatControls").hide();
	$("#chatEntries").hide();

	//setName by pressing set button...	
	$("#nameSet").click(function() {setName()});

	//setName by pressing enter key...
	$("#nameInput").keyup(function (e) {
	    if (e.keyCode == 13) {
	        setName();
	    }
	});


	//sendMessage by pressing send button...
	$("#submit").click(function() {sendMessage();});
	
	//sendMessage by pressing enter key...
	$("#messageInput").keyup(function (e) {
	    if (e.keyCode == 13) {
	        sendMessage();
	    }
	});

});