$(document).ready(() => {
    $(".optional").hide();

    $(".chkOpcional").click(() => {
        if ($(".opcional").is("hidden")) {
            $(".opcional").show();
        } else {
            $(".opcional").hide();
        }
    })
});
