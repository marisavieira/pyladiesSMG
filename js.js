function descer(tag){
    $("html, body").animate({
        scrollTop: $("." + tag).offset().top
   }, 800);
}