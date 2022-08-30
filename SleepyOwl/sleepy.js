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

  // $("#basket").click(() => {
  //   $(".basket-container").slideDown();
  //   // $("body *").not(".nav-links").css("filter","blur(5px)");
  //   // $("body").not(".nav-links").css("filter", "blur(3px)");
  //   $(".body-section").css("filter", "blur(20px)");
  //   if( $("#basket").attr('src','img/basket.png')){
  //     $("#basket").attr('src','img/x.png');
  //   }else{
  //     $("#basket").attr("src", "img/basket.png");
  //   }
  // }) 


  $(".shop").click(function(){
    $(".shop").toggleClass("mediaActive");
    $(".droplist").toggleClass("active");
    // if($(".shop").hasClass("mediaActive")){
    //   $(".droplist").slideDown("slow");
    // }
    // $(".droplist").slideDown("slow");

})


});

