// var images = ["../assets/img/home-main-visual.jpg,","../assets/img/IMG_2302.JPG","../assets/img/IMG_2302.JPG"];
// var currentImageIndex = 0;
// var slideshowElement = document.getElementById("slideshow");

// function changeBackgroundImage() {
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   slideshowElement.style.backgroundImage = "url(" + images[currentImageIndex] + ")";
//   currentImageIndex++;
// }

// setInterval("changeBackgroundImage()",
//  1000); // 5秒ごとに画像を切り替える

let setImage = ["../assets/img/home-main-visual.jpg",
               "../assets/img/IMG_2302.JPG",
               "../assets/img/IMG_2303.JPG"];

let counter = 0;
function slideImage(){
  if(counter > setImage.length-1){

    counter = 0;

  }

  document.getElementById("slideshow").style.backgroundImage = "url("+setImage[counter]+")";
  counter++;
}

setInterval("slideImage()",5000);

$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.contents-about').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fade-in");
      }
    });
  });
});

$(function() {
  $("#button1").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button1").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#button2").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button2").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#button3").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button3").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#button4").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button4").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#button5").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button5").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#button6").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button6").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#button7").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button7").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#button8").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button8").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#button9").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#button9").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#body").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#body").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#body2").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#body2").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $("#body3").on("mouseover", function() {
    $(this).css("opacity", 0.5);
  });    

  $("#body3").on("mouseleave", function() {
    $(this).css("opacity", 1);
  });

  $('.list a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;	//idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });

  $('.btn1').click(function() {
 
    location.href = 'https://cffjapan.org/program/philippines_work_camp';
 
  });

  $('.btn2').click(function() {
 
    location.href = 'https://cffjapan.org/program/malaysia_work_camp';
 
  });

  $('.btn3').click(function() {
 
    location.href = 'https://cffjapan.org/program/philippines_study_tour';
 
  });

  
  $('.btn4').click(function() {
 
    location.href = 'https://cffjapan.org/program/malaysia_study_tour';
 
  });

  
  $('.btn5').click(function() {
 
    location.href = 'https://cffjapan.org/program/myanmar_study_tour';
 
  });

  
  $('.btn6').click(function() {
 
    location.href = 'https://cffjapan.org/program/philippines_happy_camp';
 
  });

  
  $('.btn7').click(function() {
 
    location.href = 'https://cffjapan.org/program/myanmar_study_camp';
 
  });

  $('#button4').click(function() {
 
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeBSqaTSMDoMeMNmJfRw5XAZR_Lko05JcCWlBMe9axbPFs24w/viewform?usp=sf_link";
 
  });

  $('#button5').click(function() {
 
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeBSqaTSMDoMeMNmJfRw5XAZR_Lko05JcCWlBMe9axbPFs24w/viewform?usp=sf_link";
 
  });

  $('#button6').click(function() {
 
    window.location.href = "https://www.facebook.com/CFF.CaringfortheFutureFundation";
 
  });

  $('#button7').click(function() {
 
    window.location.href = "https://twitter.com/CFFjapan";
 
  });

  $('#button8').click(function() {
 
    window.location.href = "https://www.instagram.com/cffjapan/";
 
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.like');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('open');
  }
});

// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('ul');

// menuToggle.addEventListener('click', () => {
//   menuToggle.classList.toggle('active');
//   nav.classList.toggle('active');
// });