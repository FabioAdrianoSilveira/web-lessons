$(document).ready(function() {
    $(".dados-window").addClass("selected");
    $(".dados").show();
    $(".cobranca").hide();
    $(".entrega").hide();

    $(".dados-window").on("click", function() {
        $(".dados-window").addClass("selected");
        $(".cobranca-window, .entrega-window").removeClass("selected");

        $(".dados").show();
        $(".cobranca, .entrega").hide();
    });
    
    $(".cobranca-window").on("click", function() {
        $(".cobranca-window").addClass("selected");
        $(".dados-window, .entrega-window").removeClass("selected");
        $(".cobranca").show();
        $(".dados, .entrega").hide();
    });

    $(".entrega-window").on("click", function() {
        $(".entrega-window").addClass("selected");
        $(".dados-window, .cobranca-window").removeClass("selected");
        $(".entrega").show();
        $(".dados, .cobranca").hide();
    });
});