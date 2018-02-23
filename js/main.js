$(document).ready(function(){
  let owl = $(".owl-carousel"),
      prev = $("#left")
      next = $("#right")
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    center: true,
    next: $("#right"),
    prev: $("#left")
  });
  $("#left").on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  });
  $("#right").on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
});
