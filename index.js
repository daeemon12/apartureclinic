var video1 = document.getElementById("video-1");
var video2 = document.getElementById("video-2");
var video3 = document.getElementById("video-3");
var video4 = document.getElementById("video-4");
var video5 = document.getElementById("video-5");
var video6 = document.getElementById("video-6");
var video7 = document.getElementById("video-7");
var video8 = document.getElementById("video-8");
var video9 = document.getElementById("video-9");
var video10 = document.getElementById("video-10");
var video11 = document.getElementById("video-11");
var video12 = document.getElementById("video-12");
var video13 = document.getElementById("video-13");
var video14 = document.getElementById("video-14");
var video15 = document.getElementById("video-15");
var video16 = document.getElementById("video-16");
var video17 = document.getElementById("video-17");
var video18 = document.getElementById("video-18");
var video19 = document.getElementById("video-19");
var video20 = document.getElementById("video-20");

video1.addEventListener("mouseover", function(){
    video1.setAttribute("controls", "controls")
})
video1.addEventListener("mouseout", function(){
    video1.removeAttribute("controls")
})
video2.addEventListener("mouseover", function(){
    video2.setAttribute("controls", "controls")
})
video2.addEventListener("mouseout", function(){
    video2.removeAttribute("controls")
})
video3.addEventListener("mouseover", function(){
    video3.setAttribute("controls", "controls")
})
video3.addEventListener("mouseout", function(){
    video3.removeAttribute("controls")
})
video4.addEventListener("mouseover", function(){
    video4.setAttribute("controls", "controls")
})
video4.addEventListener("mouseout", function(){
    video4.removeAttribute("controls")
})
video5.addEventListener("mouseover", function(){
    video5.setAttribute("controls", "controls")
})
video5.addEventListener("mouseout", function(){
    video5.removeAttribute("controls")
})
video6.addEventListener("mouseover", function(){
    video6.setAttribute("controls", "controls")
})
video6.addEventListener("mouseout", function(){
    video6.removeAttribute("controls")
})
video7.addEventListener("mouseover", function(){
    video7.setAttribute("controls", "controls")
})
video7.addEventListener("mouseout", function(){
    video7.removeAttribute("controls")
})
video8.addEventListener("mouseover", function(){
    video8.setAttribute("controls", "controls")
})
video8.addEventListener("mouseout", function(){
    video8.removeAttribute("controls")
})
video9.addEventListener("mouseover", function(){
    video9.setAttribute("controls", "controls")
})
video9.addEventListener("mouseout", function(){
    video9.removeAttribute("controls")
})
video10.addEventListener("mouseover", function(){
    video10.setAttribute("controls", "controls")
})
video10.addEventListener("mouseout", function(){
    video10.removeAttribute("controls")
})
video11.addEventListener("mouseover", function(){
    video11.setAttribute("controls", "controls")
})
video11.addEventListener("mouseout", function(){
    video11.removeAttribute("controls")
})
video12.addEventListener("mouseover", function(){
    video12.setAttribute("controls", "controls")
})
video12.addEventListener("mouseout", function(){
    video12.removeAttribute("controls")
})
video13.addEventListener("mouseover", function(){
    video13.setAttribute("controls", "controls")
})
video13.addEventListener("mouseout", function(){
    video13.removeAttribute("controls")
})
video14.addEventListener("mouseover", function(){
    video14.setAttribute("controls", "controls")
})
video14.addEventListener("mouseout", function(){
    video14.removeAttribute("controls")
})
video15.addEventListener("mouseover", function(){
    video15.setAttribute("controls", "controls")
})
video15.addEventListener("mouseout", function(){
    video15.removeAttribute("controls")
})
video16.addEventListener("mouseover", function(){
    video16.setAttribute("controls", "controls")
})
video16.addEventListener("mouseout", function(){
    video16.removeAttribute("controls")
})
video17.addEventListener("mouseover", function(){
    video17.setAttribute("controls", "controls")
})
video17.addEventListener("mouseout", function(){
    video17.removeAttribute("controls")
})
video18.addEventListener("mouseover", function(){
    video18.setAttribute("controls", "controls")
})
video18.addEventListener("mouseout", function(){
    video18.removeAttribute("controls")
})
video19.addEventListener("mouseover", function(){
    video19.setAttribute("controls", "controls")
})
video19.addEventListener("mouseout", function(){
    video19.removeAttribute("controls")
})
video20.addEventListener("mouseover", function(){
    video20.setAttribute("controls", "controls")
})
video20.addEventListener("mouseout", function(){
    video20.removeAttribute("controls")
})



const carousel = document.getElementById("carousel");
const videos = carousel.querySelectorAll("video");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const overlay = document.getElementById("overlay");
const overlayVideo = document.getElementById("overlayVideo");
const closeBtn = document.getElementById("closeBtn");

let currentIndex = 2; // start from the 3rd video so 3–7 are visible
const visibleItems = 5;
const totalItems = videos.length;

function updateCarousel() {
  const offset = -(currentIndex * (100 / visibleItems));
  carousel.style.transform = `translateX(${offset}vw)`;
}


nextBtn.addEventListener("click", () => {
  if (currentIndex < totalItems - visibleItems) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Open overlay when video clicked
videos.forEach(video => {
  video.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayVideo.src = video.getAttribute("src"); // Load video into overlay
    overlayVideo.poster = video.getAttribute("poster"); // Keep same thumbnail
    overlayVideo.play();
  });
});

// Close overlay
function closeOverlay() {
  overlay.style.display = "none";
  overlayVideo.pause();
  overlayVideo.src = ""; // Reset video
}

closeBtn.addEventListener("click", closeOverlay);

// Close when clicking background
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeOverlay();
  }
});

updateCarousel();
