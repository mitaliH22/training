$(function(){
  $(".image-container").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: ".left-btn",
    nextArrow: ".right-btn",
  });
  
  var tabList = $(".tabs-li li"); 
  var tabContent = $(".coffe-cards");

  // $(".tabs").tabs();


  $(".slide-down").click(function(){
     $(".drop-down-slide-content").slideToggle("slow");
  })

  $(".del-option").click(function(){
    $(".footer-text").fadeOut("slow");
  })

  $(".basket").click(function(){
    $(".basket-container").slideToggle("slow");
    
  });

  // $(".tab-section-container .tab-section:nth-of-type(1)").show();
  
  // $(".tabs-li").click(function () {
  //   $(".tabs-li li a").addClass("active-tab");
  // });
 
$(".tab-section").hide();
$("#tab1-section").show();
$("#tab1").addClass("active-tab");
  $(".tabs-li a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("id");
    // console.log(target);
    $(".tabs-li a").removeClass("active-tab");
    $(this).addClass("active-tab");
   
    $(".tab-section").hide();
    $("[data-content=" + target + "]").fadeIn("slow");
    
  });




  var modal_container = document.getElementById("modal_container");
  var close = document.getElementById("close");

  window.addEventListener("load", function () {
    setTimeout(function open(event) {
      modal_container.classList.add("show");
    }, 1000);
  });
  close.addEventListener("click", () => {
    modal_container.classList.remove("show");
  });

  // $("#basket").click(() => {
  //   $("#basket").css("transform", "rotate(-180deg)");
  //   $("#basket").fadeOut();
  //   $(".x-cart").show();
  // })

  var toggle = true;
  let img = document.getElementById("basket");
  img.addEventListener("click", (e) => {
    e.preventDefault();
    toggle = !toggle;
    if(toggle) {
      img.src = "img/basket.png";
      $(".basket-container").slideUp();
      $(".body-section").css({"filter": "","padding": ""});
      
    }else{
      img.src = "img/x.png";
      $(".basket-container").slideDown();
      $(".body-section").css("filter" , "blur(8px)");
      
    }

  })

  
  $(".shop").click(function(e){
    e.preventDefault();
    $(".shop").toggleClass("mediaActive");
    $(".droplist").toggleClass("actives");
    $(".droplist").slideToggle("slow");

})

$(window).resize(function(){

  var width = $(window).width();
      if (width <= 888) {
        $(".newspaper-list").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          prevArrow: "",
          nextArrow: "",
        });
      }


})
//    var widthh = $(window).width();
//   console.log(widthh);
//    if(widthh <= 768) {
//     $(".detail-images:not(.slick-initialized)").slick({
//       dots: false,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       prevArrow: ".left-btn-detail",
//       nextArrow: ".right-btn-detail",
//     });
//    }else{
//     console.log("hi");
//    }

// $(window).resize(function(){


   
// })

  $(".detail-images:not(.slick-initialized)").slick({
    infinite: true,
    speed: 300,
     prevArrow: ".left-btn-detail",
      nextArrow: ".right-btn-detail",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: ".left-btn-detail",
          nextArrow: ".right-btn-detail",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });


  

});

