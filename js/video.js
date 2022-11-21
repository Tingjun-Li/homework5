// Add js here.
var video;

window.addEventListener("load", function() {
	video = document.querySelector("#videoplayer");
});

// play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down
var speed_list = [0.5, 1, 2];
var speed_index = 1;
document.querySelector("#slower").addEventListener("click", function() {
    if (speed_index > 0) {
        speed_index--;
    } else {
        alert("Video is at slowest speed!");
    }
	video.playbackRate = speed_list[speed_index];
	console.log("The new speed is " + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
    if (speed_index < 2) {
        speed_index++;
    } else {
        alert("Video is at fastest speed!");
    }
	video.playbackRate = speed_list[speed_index];
	console.log("The new speed is " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	let skiptime = video.currentTime + 15;
	if (skiptime > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = skiptime;
	}
	console.log("Current location " + video.currentTime);
	video.play();
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
	else {
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	}
});

// change volumn
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log(video.volume);
});
