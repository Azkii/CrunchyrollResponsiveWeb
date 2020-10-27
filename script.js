  
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'iDBzWhfN3hI',
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}
const config = {
  type: 'carousel',
  perView: 7,
  breakpoints: {
    1600: {
      perView: 6.5
    },
    1500: {
      perView: 5.5
    },
    1024: {
      perView: 3
    },
    600: {
      perView: 1
    }
  }
}
new Glide('.glide', config).mount()
