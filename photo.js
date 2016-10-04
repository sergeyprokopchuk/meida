jQuery(document).ready(function($) {
    var images=Array();
    var imgCount=0;
    var currImage =0;
    init();
    
    
    $("a.zoom").click(function(e) {
       e.preventDefault();
      
       var imageorig = $(this).attr("href");
       checkIndex(imageorig);
       
       var positiontop = (document.documentElement.clientHeight-$('#zoomConteiner').height())/2;
       var positionleft = (document.documentElement.clientWidth-$('#zoomConteiner').width())/2;
       
       
       $("#zoomConteiner .screen").attr("src", imageorig);
       $("#zoomConteiner").css({
           display: "block",
           top: positiontop,
           left: positionleft
       });
       
    });
    
    $("#zoomConteiner .close").click(function(e){
        e.preventDefault();
        $("#zoomConteiner").css({
           display: "none" 
        });
    });
    
    $('#zoomConteiner .prev').click(function(e){
        e.preventDefault();
        currImage = currImage -1;
        if (currImage < 0) currImage = 0;
        $("#zoomConteiner .screen").attr("src", images[currImage]);
    });
    
    $('#zoomConteiner .next').click(function(e){
        e.preventDefault();
        currImage = currImage +1;
        if (currImage > imgCount-1) currImage = imgCount-1;
        $("#zoomConteiner .screen").attr("src", images[currImage]);
    });
    
    function init(){
        $('.photo .zoom').each(function(k,v){
            images.push($(v).attr('href'));
        });
        
        imgCount = images.length;
    }
    
    function checkIndex(image) {
        $('.photo .zoom').each(function(k,v){
            if ($(v).attr('href') == image) currImage = k;
            
           
        });
         console.log('currentimage: ' +currImage);
        
    }
});
