$(function() {
  var introH = $("#intro").innerHeight(),
    header = $("#header"),
    scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);
  /*fixed header*/
  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    console.log(scrollOffset);
    checkScroll(scrollOffset);
  });
  function checkScroll(scrollOffset) {
    scrollOffset = $(this).scrollTop();
    /*console.log(scrollOffset);*/
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  /*smoth scroll*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOfset = $(blockId).offset().top;
    $("#nav a").removeClass("active");
    $this.addClass("active");
    $("html, body").animate(
      {
        scrollTop: blockOfset
      },
      800
    );
  });
/*Menu nav togle*/
  $("#nav-toggle").on("click", function(event){
      event.preventDefault();
      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
  });

  /*Collapse*/
  $("[data-collapse]").on("click", function(event){
    event.preventDefault();
    
    var $this = $(this),
        blockId = $this.data('collapse');
    $this.toggleClass("active");
    /*$(blockId).slideToggle();*/
  });
  /*slider*/
  $("[data-slider]").slick()({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
