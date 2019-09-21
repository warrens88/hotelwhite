////메뉴
$(document).ready(function () {

    //lnb
    $('.btn_menu').click(function () {
        $('.menu').css('left', '0px');
        $('.dimmed').css('display', 'block');
    });
    $('.close_menu').click(function () {
        $('.menu').css('left', '-75%');
        $('.dimmed').css('display', 'none');
    });

    //depth
    var depth01 = $('.depth_01 > li > a');
    var depth02 = $('.depth_02 > li > a');

    depth01.click(function () {
        $(this).closest('ul').find('.depth_02').slideToggle("fast");
        $(this).find('span').toggleClass('plus');
        if ($(this).find('span').hasClass("plus") == true) {
            $(this).find('span').text("-");
            depth01.siblings().find('span').removeClass('plus');
        } else {
            $(this).find('span').text("+");
            depth01.siblings().find('span').addClass('plus');
        }
    });

    depth02.click(function () {
        $(this).closest('ul').find('.depth_03').slideToggle("fast");
    });

    //메인슬라이드
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });

    //슬라이드_02(자세히보기)
    var swiper = new Swiper('.swiper-container.roll_02', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //슬라이드_03(진행중인프로모션)
    var swiper = new Swiper('.swiper-container.roll_03', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //슬라이드_04(더호텔화이트멤버쉽)
    var swiper = new Swiper('.swiper-container.roll_03', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //갤러리 레이어 팝업
	$('.btn-example').click(function(){
		var $href = $(this).attr('href');
		layer_popup($href);
    });

	function layer_popup(el){
		var $el = $(el);        //레이어의 id를 $el 변수에 저장
        var isDim = $el.hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

        isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

		var $elWidth = $(window).width(),
			$elHeight = $(window).height()/2;

		$el.find(".popbox").css({
            marginTop: -$elHeight/3,
            marginLeft: -$elWidth/2
		})
		$el.find('a.btn-layerClose').click(function(){
			isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
			return false;
		});

		$('.layer .dimBg').click(function(){
			$('.dim-layer').fadeOut();
			return false;
		});
    }

    //ROOM 토글
    
    $('.btn_toggle_box a').click(function(){
        if($(this).hasClass('on')){ 
          $(this).removeClass('on');
        }else{
          $(this).addClass('on');
        }
      });
  
    $("#btn_toggle_01").click(function(){
    $("#toggle_box_01").slideToggle();
    });

    $("#btn_toggle_02").click(function(){
    $("#toggle_box_02").slideToggle();
    });

    $("#btn_toggle_03").click(function(){
    $("#toggle_box_03").slideToggle();
    });

    $("#btn_toggle_04").click(function(){
    $("#toggle_box_04").slideToggle();
    });

    $("#btn_toggle_05").click(function(){
    $("#toggle_box_05").slideToggle();
    });

    $("#btn_toggle_06").click(function(){
    $("#toggle_box_06").slideToggle();
    });

    $("#btn_toggle_07").click(function(){
    $("#toggle_box_07").slideToggle();
    });
});