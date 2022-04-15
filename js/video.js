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
	console.log("Current speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.currentTime += 15
	if(video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		console.log("Unmute")
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		console.log('Mute"')
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Change Volume")
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original")
	video.classList.remove("oldSchool")
})
