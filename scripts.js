var visibleText = "Show Less"
var hiddenText = "Thank You"

$(document).ready(function(){
    
    $(".info button").click(function(){
        $(this).toggleClass("visible");
        
        if($(this).hasClass("visible")){
            $(this).html(visibleText);
        }else{
            $(this).html(hiddenText);
        }
        
        $(this).next().slideToggle("visible");
    });
    
    $("#fashion").hover(function(){
        $(".turtle").show();
    }, function(){
        $(".turtle").hide();
    });
});

//overlay: make image transparent?