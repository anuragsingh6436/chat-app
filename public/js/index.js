var socket=io();
socket.on('connect',function() {
	console.log('Connected to the server');
})

socket.on('disconnect',function() {
	console.log('disconnected from server');
socket.on('newEmail',function(){
	console.log('New Email');
})