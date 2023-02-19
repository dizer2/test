 
 let opened = false;

 $('#burger').click(function() {
	if(opened == false) {
		burger__row1.classList.remove('burger__row2__animation__close');
		burger__row2.classList.remove('burger__row3__animation__close');
		burger__menu.classList.remove('burger__menu__animation__close');
		burger__row3.classList.remove('burger__row1__animation__close');
		burger__row3.classList.add('burger__row1__animation');
	burger__row1.classList.add('burger__row2__animation');
	burger__row2.classList.add('burger__row3__animation');

	body.classList.add('body__animation');
	const myTimeout = setTimeout(myGreeting, 90);

	function myGreeting() {
		burger__menu.classList.add('burger__menu__animation');
	}
	burger__content.classList.add('burger__conrant__animation');

	

		opened = true;
	} else{

	burger__content.classList.remove('burger__conrant__animation');
			burger__menu.classList.remove('burger__menu__animation');
			burger__menu.classList.add('burger__menu__animation__close');
			burger__row3.classList.remove('burger__row3__animation');
			burger__row3.classList.add('burger__row1__animation__close');
			burger__row1.classList.remove('burger__row2__animation');
    	burger__row1.classList.add('burger__row2__animation__close');
    	burger__row2.classList.add('burger__row3__animation__close');
			body.classList.remove('body__animation');



	

		opened = false
	}
 });




 $('.text__butrrrr').mousemove(function() {
	kvadr.classList.add('kvadr__animation');
	kvadr.classList.remove('kvadr');
	line__burger2.classList.remove('line__burger__hover__close');
	line__burger2.classList.add('line__burger__hover');




 });


 
 $('.text__butrrrr').mouseleave(function() {
	kvadr.classList.remove('kvadr__animation');
	kvadr.classList.add('kvadr');
	line__burger2.classList.remove('line__burger__hover');
	line__burger2.classList.add('line__burger__hover__close');

 });



 $('.text__butrrrr2').mousemove(function() {
	kvadr2.classList.add('kvadr__animation');
	kvadr2.classList.remove('kvadr');
	line__burger3.classList.remove('line__burger__hover__close');
	line__burger3.classList.add('line__burger__hover');




 });


 
 $('.text__butrrrr2').mouseleave(function() {
	kvadr2.classList.remove('kvadr__animation');
	kvadr2.classList.add('kvadr');
	line__burger3.classList.remove('line__burger__hover');
	line__burger3.classList.add('line__burger__hover__close');

 });




 $('.text__butrrrr3').mousemove(function() {
	kvadr3.classList.add('kvadr__animation');
	kvadr3.classList.remove('kvadr');
	line__burger4.classList.remove('line__burger__hover__close');
	line__burger4.classList.add('line__burger__hover2');




 });


 
 $('.text__butrrrr3').mouseleave(function() {
	kvadr3.classList.remove('kvadr__animation');
	kvadr3.classList.add('kvadr');
	line__burger4.classList.remove('line__burger__hover2');
	line__burger4.classList.add('line__burger__hover__close');

 });


 $('.text__butrrrr4').mousemove(function() {
	kvadr4.classList.add('kvadr__animation');
	kvadr4.classList.remove('kvadr');
	line__burger5.classList.remove('line__burger__hover__close3');
	line__burger5.classList.add('line__burger__hover3');




 });


 
 $('.text__butrrrr4').mouseleave(function() {
	kvadr4.classList.remove('kvadr__animation');
	kvadr4.classList.add('kvadr');
	line__burger5.classList.remove('line__burger__hover3');
	line__burger5.classList.add('line__burger__hover__close3');

 });




 const myTimeout2 = setTimeout(myGreeting2, 5000);

 function myGreeting2() {

	wrap.classList.add('wrap__animation');
	loading.classList.add('loading__animation');


}