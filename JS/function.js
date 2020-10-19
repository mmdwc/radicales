(function($){})(window.jQuery);

$(document).ready(function(){

    accordeon();
    scroll_hash();


});

$(window).load(function(){

    loading();

});

function accordeon() {

    $(".bloc_mot_def").each(function(){

        var bloc_mot_def = $(this),
            mot = bloc_mot_def.find(".mot"),
            def = bloc_mot_def.find(".def");

            mot.click(function(){

                bloc_mot_def.toggleClass("opened");
                def.slideToggle(100);
            })


    })
}

function scroll_hash() {

    var hashTagActive = "";
    
    $(".scroll").on("click" , function (event) {

        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height() ;
            } else {
                dest = $(this.hash).offset().top - 180;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 300);
            hashTagActive = this.hash;
        }
    });

}


function loading() {

var res = performance.getEntriesByType('resource');

var totalSize = res.reduce((size, item) => {
  size += item.decodedBodySize;
  return size;
}, 0);

//console.log(totalSize);

var totalSizeKB = totalSize / Math.pow(1024,1)

//console.log(totalSizeKB);

var totalSizeKB_decimal = (Math.round(totalSizeKB * 100)/100).toFixed(2);

$(".size span").html(totalSizeKB_decimal + " KB");


}