$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.delay(500).fadeOut('slow');
    $preloader.delay(500).fadeOut('slow');
});

new WOW().init();

$('#list_photos').carouFredSel({ 
	responsive: true, 
	width: '100%', 
	scroll: 1, 
	items: {
		width: 320,
		visible: {
			min: 2, 
			max: 6}
		} 
	});


(function(){
	$(".btn_click").click(function(e){
		e.preventDefault();
		$(".order").fadeIn(500);
	});
	$(".closed").click(function(e){
		$(".order").fadeOut(500);
	})
	$(".list_photos_li").click(function(e){
		e.preventDefault();
		$(".order").fadeIn();
	})
})();

var mas = [];

var body = $('.body-admin');


$(".submit_input").click(function(e){
	e.preventDefault();
	let name = $('.name').val();
	let tel = $('.tel').val();
    let email = $('.email').val();
    let services = $('.services').val();
    let area = $('.area').val();
    if (name, tel, email, services, area == "" || null) {
    	$(".order_conteiner").fadeOut();
    	$(".worningform").fadeIn(500);
    }else{
    	mas.push(name + ', ' + tel + ', ' + email + ', ' + services + ', ' + area);
    	$(".order_conteiner").fadeOut();
    	$(".okform").fadeIn(500);
		document.cookie = mas;
		console.log(document.cookie);
    }
});

$(".worningform").click(function(e){
	e.preventDefault();
	$(".worningform").fadeOut();
	$(".order_conteiner").fadeIn(300);
})

$(".okform").click(function(e){
	e.preventDefault();
	$(".order").fadeOut();
})






	