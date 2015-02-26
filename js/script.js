/*document.ontouchmove = function(event){
    event.preventDefault();
}*/

window.addEventListener("load",function() {
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
});

$(document).ready(function(){
  $("input").on("keyup",function(){

    var quant = +$("#quantity").val();
    var invest = +$("#investment").val();
    var sale = +$("#sale").val();
    var ship = +$("#shipping").val();
    var total = (quant*sale) - (quant*invest);

    $("#gross").text("$" + total );
    var grossNet = $("#grossAmt, #netAmt");
    if (total < 0 || (total <= 0 && ship > 0)) {
      $("#grossLabel p").text("Debt");
      grossNet.css("background-color","red");
    } else {
      grossNet.css("background-color","#FFA500").find("p").css("color","#000");
      $("#grossLabel p").text("Gross");
    };

    $("#shipAmt").text ("$" + ship);

    if (invest > 0){
      $("#invested").text("$" + invest * quant);
    } else {
      $("#invested").text("$" + invest);
    };

    if (ship > 0){
      $("#net").text("$" + (total - ship));
    } else {
      $("#net").text("$" + total);
    };

    if ( quant > 0 || invest > 0 || sale > 0 || ship > 0) {
    };

		if (ENV.is_iphone) {
        var Xt, Vt = function() {
                window.innerWidth < 800 ? $("#iphone_install").addClass("hidden") : $("#iphone_install").removeClass("hidden")
            };
        Vt(), $(window).bind("gestureend", function(e) {
            Xt = setTimeout(Vt, 250)
        }), $(window).bind("gesturestart", function(e) {
            clearTimeout(Xt), $("#iphone_install").addClass("hidden")
        }), $("#iphone_install").show().bind("touchend", function(e) {
            e.preventDefault(), $("#iphone_install").toggleClass("open")
        }), $("#mobile_link").remove(), $("#desktop_link").remove()
    };


  });
  $(".fa-info").on('click', function(){
    alert("A simple profit calulator. More features coming soon.\n\nCopyright 2015 Chip Eyler\nAll Rights Reserved.")
  });
});
