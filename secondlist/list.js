$("#vvod").on("keydown", function(event){
    var item;
    if(event.which == 13){
        item = $("<li></li>");
        item.addClass("list-group-item");
        item.html($(this).val());
        $(this).val("");
        item.on("click", function(){
            $(this).addClass("list-group-item-danger");
        });
        $("#spisok").append(item);
    }
});
 
$(document).on("keydown", function(){
    if(event.which == 46){
        $("#remove-dialog").modal("show");
    }
});
 
$("#remove").on("click", function(){
    $(".list-group-item-danger").remove();
    $("#remove-dialog").modal("hide");
});