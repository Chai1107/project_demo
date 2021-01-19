//? 视频的点击和播放
function playPause() {
  var videoVal = document.getElementById("video");
  if (videoVal.paused) {
    videoVal.play();
  } else {
    videoVal.pause();
  }
}

function huanDu() {
  document.getElementById("video").src = "../static/video_first.mp4";
}

function luDu() {
  document.getElementById("video").src = "../static/video_second.mp4";
}

function jiaoGuan() {
  document.getElementById("video").src = "../static/video_third.mp4";
}

function gaoSu() {
  document.getElementById("video").src = "../static/video_third.mp4";
}

function huanBao() {
  document.getElementById("video").src = "../static/video_third.mp4";
}

function meiKuang() {
  document.getElementById("video").src = "../static/video_third.mp4";
}

function lingShou() {
  document.getElementById("video").src = "../static/video_third.mp4";
}
