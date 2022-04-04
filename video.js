var video;

video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate *= 0.95
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate /= 0.95
	console.log("New speed is " + video.playbackRate);
});

// document.querySelector("#skip").addEventListener("click", function() {
// 	//console.log(video.duration)
// 	if(video.currentTime + 15 > video.duration){
// 		video.currentTime = 0
// 	}
// 	else {
// 		video.currentTime += 15
// 	}
// 	console.log("The current time is " + video.currentTime)
// });

// document.querySelector("#mute").addEventListener("click", function() {
// 	if(video.muted == true){
// 		video.muted = false
// 		this.innerHTML = "Mute"
// 	}
// 	else {
// 		video.muted = true
// 		this.innerHTML = "Unmute"
// 	}
// 	console.log("The value of mute is " + video.muted)
// });

// document.querySelector("#slider").addEventListener("click", function() {
// 	video.volume = document.querySelector("#slider").value/100
// 	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
// 	console.log(this.value)
// });
