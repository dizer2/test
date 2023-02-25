let prise = document.getElementById('prise');

let Newprise = 0;


console.log(prise)

$('.categoryInner').hide(0);



function hideContant(){
	$('.categoryInner').hide(0);
}




$('#cheese').click(function() {
	hideContant();
	$('#cheeseOpen').toggle(1000);
 });
 
 $('#meat').click(function() {
	hideContant();
	$('#meat2').toggle(1000);
 });
 
 $('#sous').click(function() {
	hideContant();
	$('#sous2').toggle(1000);
 });

 $('#vegetable').click(function() {
	hideContant();
	$('#vegetable2').toggle(1000);
 });
 
 $('#vegetable__new').click(function() {
	hideContant();
	$('#vegetable__new2').toggle(1000);
 });


 $('.pic2').hide(0);

 $('.pic2').click(function () {
	$(this).hide(100);
});


 $('#feta').click(function() {
	Newprise = Newprise + 80;
	console.log(Newprise)
	prise.innerText = Newprise;

	$('#feta2').show(100);
	button__pizaa.classList.add('buuton__anomation');


 });

 $('#blue').click(function() {
	Newprise = Newprise + 60;
	console.log(Newprise)
	prise.innerText = Newprise;
   
	$('#blue2').show(100);
	button__pizaa.classList.add('buuton__anomation');

 });

 $('#parm').click(function() {
	Newprise = Newprise + 60;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#parm2').show(100);
	button__pizaa.classList.add('buuton__anomation');

 });

 $('#cheddar').click(function() {
	Newprise = Newprise + 60;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#cheddar2').show(100);
	button__pizaa.classList.add('buuton__anomation');

 });

 $('#mozzarela').click(function() {
	Newprise = Newprise + 60;
	console.log(Newprise)
	prise.innerText = Newprise;

	$('#mozzarela2').show(100);
 });

 $('#cheken').click(function() {
	Newprise = Newprise + 100;
	console.log(Newprise)
	prise.innerText = Newprise;

	$('#cheken2').show(100);
 });

 $('#bacon').click(function() {
	Newprise = Newprise + 100;
	console.log(Newprise)
	prise.innerText = Newprise;

	$('#bacon2').show(100);
	button__pizaa.classList.add('buuton__anomation');

 });

 $('#shunka').click(function() {
	Newprise = Newprise + 80;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#shunka2').show(100);
 });

 $('#paperoni').click(function() {
	Newprise = Newprise + 30;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#paperoni2').show(100);
	button__pizaa.classList.add('buuton__anomation');

 });

 $('#alfredo').click(function() {
	Newprise = Newprise + 20;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#alfredo2').show(100);
 });

 $('#barbequ').click(function() {
	Newprise = Newprise + 40;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#barbequ2').show(100);
 });

 $('#chasnikovy').click(function() {
	Newprise = Newprise + 55;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#chasnikovy2').show(100);
 });

 $('#kukurudza').click(function() {
	Newprise = Newprise + 105;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#kukurudza2').show(100);
 });

 $('#ananas').click(function() {
	Newprise = Newprise + 95;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#ananas2').show(100);
 });

 $('#tomato').click(function() {
	Newprise = Newprise + 95;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#tomato2').show(100);
 });

 $('#shpunat').click(function() {
	Newprise = Newprise + 205;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#shpunat2').show(100);
 });

 $('#mushrooms').click(function() {
	Newprise = Newprise + 65;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#mushrooms2').show(100);
 });


 $('#pepper').click(function() {
	Newprise = Newprise + 105;
	console.log(Newprise)
	prise.innerText = Newprise;
	$('#pepper2').show(100);
 });

 
 $('.ingradient').click(function () {
	$(this).hide(100);
});

//  
// 
// 

$('#feta2').click(function() {
	Newprise = Newprise - 80;
	prise.innerText = Newprise;
	$('#feta__ingradient').show(100);

 });

 $('#blue2').click(function() {
	Newprise = Newprise - 60;
	prise.innerText = Newprise;
	$('#blue__ingredient').show(100);
 });

 $('#parm2').click(function() {
	Newprise = Newprise - 60;
	prise.innerText = Newprise;
	$('#parm__ingredient').show(100);
 });

 $('#cheddar2').click(function() {
	Newprise = Newprise - 60;
	prise.innerText = Newprise;
	$('#cheddar__ingredient').show(100);
 });

 $('#mozzarela2').click(function() {
	Newprise = Newprise - 60;
	prise.innerText = Newprise;
	$('#mozzarela__ingredient').show(100);
 });

 $('#cheken2').click(function() {
	Newprise = Newprise - 100;
	prise.innerText = Newprise;
	$('#cheken__ingredient').show(100);
 });

 $('#bacon2').click(function() {
	Newprise = Newprise - 100;
	prise.innerText = Newprise;
	$('#bacon__ingredient').show(100);
 });

 $('#shunka2').click(function() {
	Newprise = Newprise - 80;
	prise.innerText = Newprise;
	$('#shunka__ingredient').show(100);
 });

 $('#paperoni2').click(function() {
	Newprise = Newprise - 30;
	prise.innerText = Newprise;
	$('#paperoni__ingredient').show(100);
 });

 $('#alfredo2').click(function() {
	Newprise = Newprise - 20;
	prise.innerText = Newprise;
	$('#alfredo__ingredient').show(100);
 });

 $('#barbequ2').click(function() {
	Newprise = Newprise - 40;
	prise.innerText = Newprise;
	$('#barbequ__ingredient').show(100);
 });

 $('#chasnikovy2').click(function() {
	Newprise = Newprise - 55;
	prise.innerText = Newprise;
	$('#chasnikovy__ingredient').show(100);
 });

 $('#kukurudza2').click(function() {
	Newprise = Newprise - 105;
	prise.innerText = Newprise;
	$('#kukurudza__ingredient').show(100);
 });

 $('#ananas2').click(function() {
	Newprise = Newprise - 95;
	prise.innerText = Newprise;
	$('#ananas__ingredient').show(100);
 });

 $('#tomato2').click(function() {
	Newprise = Newprise - 95;
	prise.innerText = Newprise;
	$('#tomato__ingredient').show(100);
 });

 $('#shpunat2').click(function() {
	Newprise = Newprise - 205;
	prise.innerText = Newprise;
	$('#shpunat__ingredient').show(100);
 });

 $('#mushrooms2').click(function() {
	Newprise = Newprise - 65;
	prise.innerText = Newprise;
	$('#mushrooms__ingredient').show(100);
 });


 $('#pepper2').click(function() {
	Newprise = Newprise - 105;
	prise.innerText = Newprise;
	$('#pepper__ingredient').show(100);
 });


