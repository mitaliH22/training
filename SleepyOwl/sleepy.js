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

  $(".slide-down").click(function(){
    $(".slide-down").hide();
     $(".drop-down-slide-content").slideToggle("slow");
     $(".slide-down").show();
  })

});

