$(function(){
  $('.topic-choice li').click(function(){
    var $spot = $('.topic-choice').find('.spot-light');
    $spot.removeClass('spot-light');
    $spot.removeClass('spot-light1');
    $spot.removeClass('spot-light2');
    $(this).find('a').addClass('spot-light');
    if($(this).find('a').hasClass('pink-frame')){
      $('.topic-board').addClass('change-pink');
      $(this).find('a').addClass('spot-light1');
    }else{
      $('.topic-board').removeClass('change-pink');
      $(this).find('a').addClass('spot-light2');
    }
  })
  $('#modal1').click(function(){
    if(!$('.gaiyo-modal').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.gaiyo-modal').addClass('modal-active');
        $('.gaiyo-modal').fadeIn(500);
      });
    }
  });
  $('#modal2').click(function(){
    if(!$('.tokui-modal').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.tokui-modal').addClass('modal-active');
        $('.tokui-modal').fadeIn(500).css('display','flex');
      });
    }
  });
  $('#modal3').click(function(){
    if(!$('.athlete-modal10').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.athlete-modal10').addClass('modal-active');
        $('.athlete-modal10').fadeIn(500).css('display','flex');
      });
    }
  });
  $('#modal4').click(function(){
    if(!$('.athlete-modal99').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.athlete-modal99').addClass('modal-active');
        $('.athlete-modal99').fadeIn(500).css('display','flex');
      });
    }
  });
  $('#modal5').click(function(){
    if(!$('.most-remarked').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.most-remarked').addClass('modal-active');
        $('.most-remarked').fadeIn(500).css('display','flex');
      });
    }
  });
  $('#modal6').click(function(){
    if(!$('.Irie').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.Irie').addClass('modal-active');
        $('.Irie').fadeIn(500);
      });
    }
  });
  $('#modal7').click(function(){
    if(!$('.world-remarked').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.world-remarked').addClass('modal-active');
        $('.world-remarked').fadeIn(500);
      });
    }
  });
  $('#modal8').click(function(){
    if(!$('.gossip1').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.gossip1').addClass('modal-active');
        $('.gossip1').fadeIn(500);
      });
    }
  });
  $('#modal9').click(function(){
    if(!$('.gossip2').hasClass('modal-active')){
      var $open = $('.paste-board').find('.modal-active');
      $open.removeClass('modal-active');
      $open.fadeOut(500, function(){
        $('.gossip2').addClass('modal-active');
        $('.gossip2').fadeIn(500);
      });
    }
  });
  // スライドを閉じる
  $('#close-slide').click(function(){
    $('.slide-board').fadeOut(500);
    $(this).fadeOut(500);
    $('.slide-board-back').slideUp(500);
    // 背景をリセット
    if($('.athlete-modal10').hasClass('modal-active')){
      $('.slide-board').removeClass('slide3');
    }
    if($('.athlete-modal99').hasClass('modal-active')){
      $('.slide-board').removeClass('slide4');
    }
    if($('.most-remarked').hasClass('modal-active')){
      $('.slide-board').removeClass('slide5');
    }
    if($('.Irie').hasClass('modal-active')){
      $('.slide-board').removeClass('slide6');
    }
    if($('.world-remarked').hasClass('modal-active')){
      $('.slide-board').removeClass('slide7');
    }
    if($('.gossip1').hasClass('modal-active')){
      $('.slide-board').removeClass('slide8');
    }
    if($('.gossip2').hasClass('modal-active')){
      $('.slide-board').removeClass('slide9');
    }
  });
  // スライドを開く
  $('.view-more-btn').click(function(){
    if($('.athlete-modal10').hasClass('modal-active')){
      $('.slide-board').addClass('slide3');
    }
    if($('.athlete-modal99').hasClass('modal-active')){
      $('.slide-board').addClass('slide4');
    }
    if($('.most-remarked').hasClass('modal-active')){
      $('.slide-board').addClass('slide5');
      $('.slide5-2').fadeIn(500);
    }else{
      $('.slide5-2').fadeOut(500);
    }
    if($('.Irie').hasClass('modal-active')){
      $('.slide-board').addClass('slide6');
    }
    if($('.world-remarked').hasClass('modal-active')){
      $('.slide-board').addClass('slide7');
    }
    if($('.gossip1').hasClass('modal-active')){
      $('.slide-board').addClass('slide8');
    }
    if($('.gossip2').hasClass('modal-active')){
      $('.slide-board').addClass('slide9');
    }
    if(!$('.tokui-modal').hasClass('modal-active')){
      $('.slide-board-back').slideDown(500);
      $('.slide-board').fadeIn(500);
      $('#close-slide').fadeIn(500);
    }
  });
  $('.br-box').hover(function(){
    $('.br-detail').slideDown(300);
  },function(){
    $('.br-detail').slideUp(300);
  });
  $('.fly-box').hover(function(){
    $('.fly-detail').slideDown(300);
  },function(){
    $('.fly-detail').slideUp(300);
  });
  $('.ba-box').hover(function(){
    $('.ba-detail').slideDown(300);
  },function(){
    $('.ba-detail').slideUp(300);
  });
  $('.fr-box').hover(function(){
    $('.fr-detail').slideDown(300);
  },function(){
    $('.fr-detail').slideUp(300);
  });
  $('.im-box').hover(function(){
    $('.im-detail').slideDown(300);
  },function(){
    $('.im-detail').slideUp(300);
  });
  $('.style-detail').click(function(){
    var $url = 'https://olympics.com/ja/news/swimming-world-champs-2023-fukuoka-team-japan-announced-ikee-narita';
    window.open($url, '_blank');
  })
});
