var scrollY = 0;
var aboutme = document.getElementsByClassName("set1");
var slideCount = 0;
var slide1 = document.getElementsByClassName("slide1");
window.onwheel = function(ev){
  if (scrollY >= 0 || ev.deltaY>0){
    if(ev.deltaY>0)
      scrollY += 180;
    if(ev.deltaY<0 && scrollY>0)
      scrollY -= 180;
  }
  console.log(scrollY);
  scrollAction();
}

function scrollAction(){
  switch (slideCount) {
    case 0:
        slide1[0].style.transform = "translateX("+(-1)*scrollY*100/180+"%)";
        slide1[1].style.transform = "translateX("+scrollY*100/180+"%)";
        slide1[2].style.left = 50+20*scrollY/(180)+"%";
        slide1[2].style.top = 30-20*scrollY/(180)+"%";
        for (var i = 0; i < aboutme.length; i++) {
          aboutme[i].style.opacity = 0;
        }
        if(scrollY>=180){
          slideCount = 1;
          loadSlide2();
          break;
        }
      break;
    case 1:
        if(scrollY<180)
         slideCount = 0;
        if(scrollY>180*10){
          var set1 = document.getElementsByClassName("set1");
          document.getElementsByClassName("s2")[0].style.transform = "scale(0,0)";
          // for (var i = 0; i < set1.length; i++) {
          //   set1[i].style.transform = "scale(0,0)";
          // }
          slide1[2].style.left = "100%";
          slideCount = 2;
        }
      break;
    case 2:
      if(scrollY<180*10)
        load1();
      if(scrollY>180*15){
        slideCount = 3;
        load3();
      }
      break;
    case 3:
      if(scrollY<180*15){
        slideCount = 2;
        document.getElementsByClassName("s4")[0].style.transform = "scaleY(0)";
      }
      break;
    default:
  }
}

function load3(){
  document.getElementsByClassName("s4")[0].style.transform = "scaleY(1)";
}

function loadSlide2(){
  var op = 0;
  // var timer = setInterval(function () {
  //       if (op >= 1){
  //           clearInterval(timer);
  //       }
        for (var i = 0; i < aboutme.length; i++) {
          aboutme[i].style.opacity = 1;
        }
    //     op += 0.02;
    // }, 40);
}

function load1(){
  slideCount = 1;
  document.getElementsByClassName("s2")[0].style.transform = "scale(1,1)";
  slide1[2].style.left = "70%";
}

(function(){
  var aboutme = document.getElementsByClassName("set1");
  for (var i = 0; i < aboutme.length; i++) {
    aboutme[i].style.width = aboutme[i].offsetHeight+"px";
  }
  var projects = document.getElementsByClassName("projects");
  for (var i = 0; i < projects.length; i++) {
    projects[i].onmouseenter = function(event){
      // console.log(event.target.childNodes);
      event.target.childNodes[3].style.transform = "scaleY(1)";
      acti = event.target.childNodes[3];
    };
    // projects[i].onmouseout = function(event){
    //   acti.style.transform = "scaleY(0)";
    // };
  }
  MyWork = document.getElementsByClassName("MyWork")[0];
  Implemented = document.getElementsByClassName("codes");
  MyWork.onmouseover = function(event){
      if(event.target.className == "MyWork")
        for (var i = 0; i < Implemented.length; i++)
          Implemented[i].style.transform = "scaleY(0)";
  };
})()
