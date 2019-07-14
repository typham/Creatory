new WOW().init();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function(){
  // slide banner
  var owl_banner = $('#banner .owl-carousel');
  owl_banner.owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true,
      itemsMobile : true
  });
  // END slide banner

  // slider our creator
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      pagination: false,
      navigation : true
  });

 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

  $('#contact').css('height',$('.bg-contact').css('height'));
  $('#banner').css('height',$('.bg-banner').css('height'));
  $('.overlay-video').css('height',$('.bg-banner').css('height'));

  $("video").bind("loadedmetadata", function () {
	console.log("load done");
        var videoHeight = parseFloat($(window).width())/this.videoWidth*this.videoHeight;
        $('#banner').css('height',videoHeight);
        $('.overlay-video').css('height',videoHeight);
    });

  $(window).resize(function(){
    var videoHeight = $('.bg-banner').css('height');
    $('#banner').css('height',videoHeight);
    $('.overlay-video').css('height',videoHeight);

    $('#contact').css('height',$('.bg-contact').css('height'));
  });

  // hover icon about us & show white area
  $('.w25').hover(function(){
    $(this).children('.box-icon').attr('src',$(this).children('.box-icon').attr('src').replace('.png','-hover.png'));
    $(this).children('.box-icon').removeClass('wow swing').attr('style','').addClass('animated fadeInDown');
    $(this).children('.box-title').addClass('animated fadeInRight');
  },function(){
    $(this).children('.box-icon').attr('src',$(this).children('.box-icon').attr('src').replace('-hover',''));
    $(this).children('.box-icon').removeClass('animated fadeInDown');
    $(this).children('.box-title').removeClass('animated fadeInRight');
  });

  // click close ads
  $('.close-ads').click(function(){
    $(this).parent().remove();
  })

  // hover kpi
  $('.box-kpi').hover(function(){
    $(this).find('.kpi-number').addClass('animated bounce');
    $(this).find('.icon-kpi').addClass('animated tada');
  },function(){
    $(this).find('.kpi-number').removeClass('animated bounce');
    $(this).find('.icon-kpi').removeClass('animated tada');
  });

  // hover our creator
  $('#our-creator .owl-item').hover(function(){
    $(this).find('.item:first-child').addClass('animated bounceIn');
    $(this).find('img.below').addClass('animated swing');
  },function(){
    $(this).find('.item:first-child').removeClass('animated bounceIn');
    $(this).find('img.below').removeClass('animated swing');
  });

  // back to top
  $('.backtotop').click(function(){
     $('html, body').stop().animate({
            scrollTop: 0
        }, 500, 'easeInOutExpo');
  });

  $(".language").click(function(){
    if(!$(this).find('.select-language').length){
      var html = $('<div class="select-language"><div>EN</div><div>VI</div></div>');
      $(this).append(html);
    }

    $(this).find('.select-language').slideToggle();
    $('.select-language div').click(function(){
      var cur_lang = $(this).text();
      console.log(cur_lang);
      if(cur_lang == "EN")
      {
        location.href = "/index-en.html";
      }
      else
      {
        location.href = "/index.html";
      }
    });
  });
  // language
  // $('.language').find('span').bind('click',function(){
  //   var html = "<select id='lang' onchange='ChangeLang()' onblur='ResetLang()'>";
  //   html += "<option value='0'>EN</option>";
  //   html += "<option value='1'>VN</option>";
  //   html += "</select>";
  //   $(this).parent().html(html);
  // });
});

// function ChangeLang ()
// {
//   var lang = $('#lang option:selected').text();
//   $('.language').html("<span>"+lang+"</span>");
//   $('.language').find('span').bind('click',function(){
//     var html = "<select id='lang' onchange='ChangeLang()' onblur='ResetLang()'>";
//     html += "<option value='0'>EN</option>";
//     html += "<option value='1'>VN</option>";
//     html += "</select>";
//     $(this).parent().html(html);
//   });
// }

// function ResetLang()
// {
//   var span = "<span>EN</span>"
//   $('.language').html(span);
//   $('.language').find('span').bind('click',function(){
//     var html = "<select id='lang' onchange='ChangeLang()' onblur='ResetLang()'>";
//     html += "<option value='0'>EN</option>";
//     html += "<option value='1'>VN</option>";
//     html += "</select>";
//     $(this).parent().html(html);
//   });
// }

$('#control-video').bind('click',function(){
    var on = '<i class="fa fa-volume-up" aria-hidden="true" style="color:black;"></i>';
    var off = '<i class="fa fa-volume-off" aria-hidden="true" style="color:white;"></i>';
    if( $(".bg-banner").prop('muted') ) {
        $(".bg-banner").prop('muted', false);
        $(this).html(on);
        $(".sound").css("background-color","white");
    } else {
        $(".bg-banner").prop('muted', true);
        $(this).html(off);
        $(".sound").css("background-color","black");
    }
  });