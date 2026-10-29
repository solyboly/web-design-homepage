$(".dark-btn").click(
function(){
  $(".container").toggleClass("dark");
  $(".box").toggleClass("dark");
}
);

$(".spin-btn").click(
function(){
   $(".box").toggleClass("spin");
}
);

$(".reveal-btn").click(
    function(){
    // $(".pochita").addClass("reveal");
    // $(".pochita").css("display", "block");
    $(".pochita").show();
    $(".reveal-btn").hide();
}
);

$( ".draggable" ).draggable();
