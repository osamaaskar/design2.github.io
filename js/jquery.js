$(function(){
    var winh = $(window).height();
    var bottomnavh = $(".bottom-bar .navbar").innerHeight();
    var uppernavh = $(".upper-bar .navbar").innerHeight();
    $(".slider, .carousel-item").height(winh-(bottomnavh + uppernavh)); 
    
    
    //arrival hover
    $(" .arrival .first").mouseenter(function(){
        $(this).css("box-shadow","2px 5px 5px 2px #b5aec4" );
        $(".first .buy").css("visibility","visible");
        $(".first .heart").css("visibility","visible");
        
    });
    $(" .arrival .first").mouseleave(function(){
        $(this).css("box-shadow","none" );
        $(".first .buy").css("visibility","hidden");
        $(".first .heart").css("visibility","hidden");
    });
    
    
    var time = setInterval(showtime , 500);
        function showtime()
        {
            var date =new Date();

        var hour = date.getHours();
        var minits = date.getMinutes();
        var secondes = date.getSeconds();
        var days = 1;



            if(hours <10)
                {
                    hour = "0" + hour;
                }
            if(hour >12)
                {
                    hour = hour-12;
                }
            if(minits <10)
                {
                    minits = "0" + minits;
                }
            if(secondes <10)
                {
                    secondes = "0" + secondes;
                }
            if(hour<=24)
                {
                    days++;
                }
            document.getElementById("hours").textContent = hour;
            document.getElementById("minutes").textContent =minits ;
            document.getElementById("secondes").textContent = secondes;
            document.getElementById("day").textContent = days;
};
    
    
            //trigger mixit up
            $('.row').mixItUp();

            //adjust shuffle
            $(".shuffle li").click(function()
                                  {
                $(this).addClass("active").siblings().removeClass("active");
            });
    
    
    
    $(".show, .blus").on("click",function(){
        $(".hidden").fadeToggle(1000);
    });
    
    
    //counter
        
        var x=$(".count");
    $(".incr").on("click",function(){
        var y=parseInt(x.text());
        x.text(y+1);
        
    });
    $(".decr").on("click",function(){
        var y=parseInt(x.text());
        if(y>1)
            x.text(y-1);
    });
    
    
    //suffle tabs
    
    var tabs = $('.tabs li');
			var tabContainers = $('.tab_container');

			tabs.each(function()
			{
				var tab = $(this);
				var tab_id = tab.data('active-tab');

				tab.on('click', function()
				{
					if(!tab.hasClass('active'))
					{
						tabs.removeClass('active');
						tabContainers.removeClass('active');
						tab.addClass('active');
						$('#' + tab_id).addClass('active');
					}
				});
			});
});