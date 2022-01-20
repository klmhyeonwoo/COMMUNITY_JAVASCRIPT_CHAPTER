
var img = document.getElementsByClassName("img")[0];
var video = document.getElementsByClassName("video")[0];
var title = document.getElementsByClassName("content")[0];
var sub_title = document.getElementsByClassName("sub_content")[0];

var movie1 = {
  kor_name : "뷰티인사이드",
  eng_name : "The Beauty Inside, 2015",
  movie_src : "https://www.youtube.com/embed/NI5XwC--SYs?autoplay=1&mute=1&controls=0&disablekb=1",
  img_src : "./img_1.png",
}

var movie2 = {
  kor_name : "그 해 우리는",
  eng_name : "Our Beloved Summer, 2021",
  movie_src : "https://www.youtube.com/embed/o94O9LA8GrQ?autoplay=1&mute=1&controls=0&disablekb=1",
  img_src : "img_2.gif",
}


function click_1() {
  img.src = movie1.img_src;
  img.className = "img";
  video.src = movie1.movie_src;
  title.innerHTML = movie1.kor_name;
  sub_title.innerHTML = movie1.eng_name;
}

function click_2() {
  video.src = movie2.movie_src;
  img.src = movie2.img_src;
  img.className = "img_2";
  title.innerHTML = movie2.kor_name;
  sub_title.innerHTML = movie2.eng_name;

}
