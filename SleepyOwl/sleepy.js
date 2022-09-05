$(function(){
  $(".image-container").not('.slick-initialized').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: ".left-btn",
    nextArrow: ".right-btn",
  });
  
  var tabList = $(".tabs-li li"); 
  var tabContent = $(".coffe-cards");




  $(".slide-down").click(function(){
     $(".drop-down-slide-content").slideToggle("slow");
  })

  $(".del-option").click(function(){
    $(".footer-text").fadeOut("slow");
  })

  $(".basket").click(function(){
    $(".basket-container").slideToggle("slow");
    
  });

 
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

  modal_container.addEventListener("click", () => {
    if(modal_container.classList.contains("show")){
      modal_container.classList.remove("show");
    }
  })


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
      $(".body-section").click(()=>{
        if($(".body-section").css("filter" , "blur(8px)")){
          img.src = "img/basket.png";
          $(".basket-container").slideUp();
          $(".body-section").css({ "filter": "", "padding": "" });
        }
      })
      
    }
  })

 $(".shop").on("click",()=>{
  $(this).toggleClass("active");
  toggle = !toggle;
  if(toggle){
    $(".demo").slideUp();
  }else{
    $(".demo").addClass("shopActive");
    $(".demo").slideDown();

    $(".body-section").click(()=>{
      $(".demo").slideUp();
    })
  }
 }) 





  $(".newspaper-list:not(.slick-initialized)").slick({
    infinite: true,
    speed: 200,
    prevArrow: "",
    nextArrow: "",
    variableWidth: true,
    autoplay: true,
    mobileFirst: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: {
          prevArrow: "",
          nextArrow: "",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

$(".tab-section:not(.slick-initialized)").slick({
  infinite: true,
  speed: 300,
   prevArrow: "",
    nextArrow: "",
    variableWidth: true,
    mobileFirst: true,
  responsive: [
          {
        breakpoint: 1024,
        settings: "unslick",
      },
    {
      breakpoint: 768,
      // settings: "unslick",
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


  $(".detail-images:not(.slick-initialized)").slick({
    infinite: true,
    speed: 200,
     prevArrow: "",
      nextArrow: "",
      variableWidth: true,
      autoplay: true,
      mobileFirst: true,
      slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          prevArrow: "",
          nextArrow: "",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  
  // mobileOnlySlider(".detail-images", 767);

  // function mobileOnlySlider($slidername, $breakpoint) {
  //   var slider = $($slidername);
  //   var settings = {
  //     mobileFirst: true,
  //     responsive: [
  //       {
  //         breakpoint: $breakpoint,
  //         settings: "unslick"
  //       }
  //     ]
  //   };
  
  //   slider.slick(settings);
  
  //   $(window).on("resize", function () {
  //     if ($(window).width() > $breakpoint) {
  //       return;
  //     }
  //     if (!slider.hasClass("slick-initialized")) {
  //       return slider.slick(settings);
  //     }
  //   });
  // }
  
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("scroll_header");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky" , "active-scroll");
    } else {
      header.classList.remove("sticky" , "active-scroll");
    }
  }

  $("#scroll_header").slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: "",
    nextArrow: "",
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    setPosition: true,
    autoplay: true,
    
  })

  $(".add").click(function () {
    if ($(this).prev().val() < 20) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".sub").click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });

  $("#discount").click(()=>{
    $(".basket-coupon").html("<input type='text' placeholder='DISCOUNT' class='discount-input'/> <span class='discount-input-add'> + </span> <div class='discount-div'>Unlock a discount if you have a coupon code</div>");
  });
});

