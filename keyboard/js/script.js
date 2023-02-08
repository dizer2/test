let button = document.querySelectorAll('.button');
let txt = '';


shiftr.onclick = function() {
	alert(`This keyboard create Yura`)
}


document.addEventListener('keydown', (event) => {
  let keyName = event.key;
	window.addEventListener('keydown', newCapslock)
  window.addEventListener('keyup', newCapslock)
	function newCapslock(e) {
		if (e.getModifierState('CapsLock')) {

	}




	}
  if (keyName === 'Control') {
		ctral.classList.add('button__hover');
    return;
  }
	if (keyName === 'Shift') {
		shift.classList.add('button__hover');
		sles.innerText = '~';
		one.innerText = '!';
		two.innerText = '@';
		three.innerText = '#';
		four.innerText = '$';
		five.innerText = '%';
		six.innerText = '^';
		seven.innerText = '&';
		eight.innerText = '*';
		nine.innerText = '(';
		zero.innerText = ')';
		minys.innerText = '_';
		four.innerText = '$';
		rovno.innerText = '+';
		litera__q.innerText = 'Q';
		litera__w.innerText = 'W';
		litera__e.innerText = 'E';
		litera__r.innerText = 'R';
		litera__t.innerText = 'T';
		litera__y.innerText = 'Y';
		litera__u.innerText = 'U';
		litera__i.innerText = 'I';
		litera__o.innerText = 'O';
		litera__p.innerText = 'P';
		litera__a.innerText = 'A';
		litera__s.innerText = 'S';
		litera__d.innerText = 'D';
		litera__f.innerText = 'F';
		litera__g.innerText = 'G';
		litera__h.innerText = 'H';
		litera__j.innerText = 'J';
		litera__k.innerText = 'K';
		litera__l.innerText = 'L';
		litera__dwopkrap.innerText = ':';
		litera__onekrap.innerText = '"';
		litera__z.innerText = 'Z';
		litera__x.innerText = 'X';
		litera__c.innerText = 'C';
		litera__v.innerText = 'V';
		litera__b.innerText = 'B';
		litera__n.innerText = 'N';
		litera__m.innerText = 'M';
		left__arrowww.innerText = '<';
		right__arrowww.innerText = '>';
    return;
  }
	if (keyName === 'CapsLock') {
    caps__kolo.classList.toggle('caps__kolonew');
    caps__kolo.classList.toggle('caps__kolo');
		caps.classList.toggle('button__hover');

    return;
  }

	if (keyName === 'Backspace') {
		txt = '';
  }

// button animation
	if (keyName === 'F1') {
    F1.classList.add('button__hover');
  }
	if (keyName === 'F2') {
    F2.classList.add('button__hover');
  }
	if (keyName === 'F3') {
    F3.classList.add('button__hover');
  }
	if (keyName === 'F4') {
    F4.classList.add('button__hover');
  }
	if (keyName === 'F5') {
    F5.classList.add('button__hover');
  }
	if (keyName === 'F6') {
    F6.classList.add('button__hover');
  }
	if (keyName === 'F7') {
    F7.classList.add('button__hover');
  }
	if (keyName === 'F8') {
    F8.classList.add('button__hover');
  }
	if (keyName === 'F9') {
    F9.classList.add('button__hover');
  }
	if (keyName === 'F9') {
    F9.classList.add('button__hover');
  }
	if (keyName === 'F10') {
    F10.classList.add('button__hover');
  }
	if (keyName === 'F11') {
    F11.classList.add('button__hover');
  }
	if (keyName === 'F12') {
    F12.classList.add('button__hover');
  }

	if (keyName === '`') {
    sles.classList.add('button__hover');
  }
	if (keyName === '1') {
    one.classList.add('button__hover');
  }
	if (keyName === '2') {
    two.classList.add('button__hover');
  }
	if (keyName === '3') {
    three.classList.add('button__hover');
  }
	if (keyName === '4') {
    four.classList.add('button__hover');
  }
	if (keyName === '5') {
    five.classList.add('button__hover');
  }
	if (keyName === '6') {
    six.classList.add('button__hover');
  }
	if (keyName === '7') {
    seven.classList.add('button__hover');
  }
	if (keyName === '8') {
    eight.classList.add('button__hover');
  }
	if (keyName === '9') {
    nine.classList.add('button__hover');
  }
	if (keyName === '0') {
    zero.classList.add('button__hover');
  }
	if (keyName === '-') {
    minys.classList.add('button__hover');
  }
	if (keyName === '=') {
    rovno.classList.add('button__hover');
  }
	if (keyName === 'Backspace') {
    gg.classList.add('button__hover');
  }
	if (keyName === 'Tab') {
    tab.classList.add('button__hover');
  }
	if (keyName === 'q') {
    litera__q.classList.add('button__hover');
  }
	if (keyName === 'w') {
    litera__w.classList.add('button__hover');
  }
	if (keyName === 'e') {
    litera__e.classList.add('button__hover');
  }
	if (keyName === 'r') {
    litera__r.classList.add('button__hover');
  }
	if (keyName === 't') {
    litera__t.classList.add('button__hover');
  }
	if (keyName === 'y') {
    litera__y.classList.add('button__hover');
  }

	if (keyName === 'u') {
    litera__u.classList.add('button__hover');
  }

	if (keyName === 'i') {
    litera__i.classList.add('button__hover');
  }

	if (keyName === 'o') {
    litera__o.classList.add('button__hover');
  }

	if (keyName === 'p') {
    litera__p.classList.add('button__hover');
  }

	if (keyName === '/') {
    slesh__right.classList.add('button__hover');
  }

	if (keyName === 'Enter') {
    probil.classList.add('button__hover');
  }
	if (keyName === 'a') {
    litera__a.classList.add('button__hover');
  }
	if (keyName === 's') {
    litera__s.classList.add('button__hover');
  }
	if (keyName === 'd') {
    litera__d.classList.add('button__hover');
  }
	if (keyName === 'f') {
    litera__f.classList.add('button__hover');
  }
	if (keyName === 'g') {
    litera__g.classList.add('button__hover');
  }
	if (keyName === 'h') {
    litera__h.classList.add('button__hover');
  }
	if (keyName === 'j') {
    litera__j.classList.add('button__hover');
  }
	if (keyName === 'k') {
    litera__k.classList.add('button__hover');
  }
	if (keyName === 'l') {
    litera__l.classList.add('button__hover');
  }
	if (keyName === ';') {
    litera__dwopkrap.classList.add('button__hover');
  }
	
	if (keyName === "'") {
    litera__onekrap.classList.add('button__hover');
  }
		
	if (keyName === "z") {
    litera__z.classList.add('button__hover');
  }
	if (keyName === "x") {
    litera__x.classList.add('button__hover');
  }
	if (keyName === "c") {
    litera__c.classList.add('button__hover');
  }
	if (keyName === "v") {
    litera__v.classList.add('button__hover');
  }
	if (keyName === "b") {
    litera__b.classList.add('button__hover');
  }
	if (keyName === "n") {
    litera__n.classList.add('button__hover');
  }
	if (keyName === "m") {
    litera__m.classList.add('button__hover');
  }
	if (keyName === ",") {
    left__arrowww.classList.add('button__hover');
  }
	if (keyName === ".") {
    right__arrowww.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }

	if (keyName === "Control") {
    main__probil.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.add('button__hover');
  }
	if (keyName === "Meta") {
    win.classList.add('button__hover');
  }
	if (keyName === "ArrowLeft") {
    arrow__left.classList.add('button__hover');
  }
	if (keyName === "ArrowRight") {
    arrow__right.classList.add('button__hover');
  }
	if (keyName === "ArrowDown") {
    arrow__down.classList.add('button__hover');
  }
	if (keyName === "ArrowUp") {
    top__arrow.classList.add('button__hover');
  }


	



	






	

  if (event.ctrlKey) {
		txt += keyName;
		keyboard__input.value = txt;

			

  } else {
    txt += keyName;
		keyboard__input.value = txt;
	
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;
	if (keyName === 'Shift') {
		shift.classList.remove('button__hover');
		sles.innerText = '`';
		one.innerText = '1';
		two.innerText = '2';
		three.innerText = '3';
		four.innerText = '4';
		five.innerText = '5';
		six.innerText = '6';
		seven.innerText = '7';
		eight.innerText = '8';
		nine.innerText = '9';
		zero.innerText = '0';
		minys.innerText = '-';
		rovno.innerText = '=';
		litera__q.innerText = 'q';
		litera__w.innerText = 'w';
		litera__e.innerText = 'e';
		litera__r.innerText = 'r';
		litera__t.innerText = 't';
		litera__y.innerText = 'y';
		litera__u.innerText = 'u';
		litera__i.innerText = 'i';
		litera__o.innerText = 'o';
		litera__p.innerText = 'p';
		litera__a.innerText = 'a';
		litera__s.innerText = 's';
		litera__d.innerText = 'd';
		litera__f.innerText = 'f';
		litera__g.innerText = 'g';
		litera__h.innerText = 'h';
		litera__j.innerText = 'j';
		litera__k.innerText = 'k';
		litera__l.innerText = 'l';
		litera__dwopkrap.innerText = ';';
		litera__onekrap.innerText = "'";
		litera__z.innerText = 'z';
		litera__x.innerText = 'x';
		litera__c.innerText = 'c';
		litera__v.innerText = 'v';
		litera__b.innerText = 'b';
		litera__n.innerText = 'n';
		litera__m.innerText = 'm';
		left__arrowww.innerText = ',';
		right__arrowww.innerText = '.';
    return;
  }
	if (keyName === 'Backspace') {
		txt = '';
  }
  if (keyName === 'Control') {
    txt += keyName;
		keyboard__input.value = txt;
		main__probil.classList.remove('button__hover');

  }

  if (keyName === 'Control') {
		ctral.classList.remove('button__hover');
    return;
  }
	if (keyName === 'F1') {
    F1.classList.remove('button__hover');
  }
	if (keyName === 'F2') {
    F2.classList.remove('button__hover');
  }
	if (keyName === 'F3') {
    F3.classList.remove('button__hover');
  }
	if (keyName === 'F4') {
    F4.classList.remove('button__hover');
  }
	if (keyName === 'F5') {
    F5.classList.remove('button__hover');
  }
	if (keyName === 'F6') {
    F6.classList.remove('button__hover');
  }
	if (keyName === 'F7') {
    F7.classList.remove('button__hover');
  }
	if (keyName === 'F8') {
    F8.classList.remove('button__hover');
  }
	if (keyName === 'F9') {
    F9.classList.remove('button__hover');
  }
	if (keyName === 'F9') {
    F9.classList.remove('button__hover');
  }
	if (keyName === 'F10') {
    F10.classList.remove('button__hover');
  }
	if (keyName === 'F11') {
    F11.classList.remove('button__hover');
  }
	if (keyName === 'F12') {
    F12.classList.remove('button__hover');
  }
	if (keyName === '`') {
    sles.classList.remove('button__hover');
  }
	if (keyName === '1') {
    one.classList.remove('button__hover');
  }
	if (keyName === '2') {
    two.classList.remove('button__hover');
  }
	if (keyName === '3') {
    three.classList.remove('button__hover');
  }
	if (keyName === '4') {
    four.classList.remove('button__hover');
  }
	if (keyName === '5') {
    five.classList.remove('button__hover');
  }
	if (keyName === '6') {
    six.classList.remove('button__hover');
  }
	if (keyName === '7') {
    seven.classList.remove('button__hover');
  }
	if (keyName === '8') {
    eight.classList.remove('button__hover');
  }
	if (keyName === '9') {
    nine.classList.remove('button__hover');
  }
	if (keyName === '0') {
    zero.classList.remove('button__hover');
  }
	if (keyName === '-') {
    minys.classList.remove('button__hover');
  }
	if (keyName === '=') {
    rovno.classList.remove('button__hover');
  }
	if (keyName === 'Backspace') {
    gg.classList.remove('button__hover');
  }
	if (keyName === 'Tab') {
    tab.classList.remove('button__hover');
  }
	if (keyName === 'q') {
    litera__q.classList.remove('button__hover');
  }
	if (keyName === 'w') {
    litera__w.classList.remove('button__hover');
  }
	if (keyName === 'e') {
    litera__e.classList.remove('button__hover');
  }
	if (keyName === 'r') {
    litera__r.classList.remove('button__hover');
  }
	if (keyName === 't') {
    litera__t.classList.remove('button__hover');
  }
	if (keyName === 'y') {
    litera__y.classList.remove('button__hover');
  }

	if (keyName === 'u') {
    litera__u.classList.remove('button__hover');
  }

	if (keyName === 'i') {
    litera__i.classList.remove('button__hover');
  }

	if (keyName === 'o') {
    litera__o.classList.remove('button__hover');
  }

	if (keyName === 'p') {
    litera__p.classList.remove('button__hover');
  }

	if (keyName === '/') {
    slesh__right.classList.remove('button__hover');
  }

	if (keyName === 'Enter') {
    probil.classList.remove('button__hover');
  }
	if (keyName === 'a') {
    litera__a.classList.remove('button__hover');
  }
	if (keyName === 's') {
    litera__s.classList.remove('button__hover');
  }
	if (keyName === 'd') {
    litera__d.classList.remove('button__hover');
  }
	if (keyName === 'f') {
    litera__f.classList.remove('button__hover');
  }
	if (keyName === 'g') {
    litera__g.classList.remove('button__hover');
  }
	if (keyName === 'h') {
    litera__h.classList.remove('button__hover');
  }
	if (keyName === 'j') {
    litera__j.classList.remove('button__hover');
  }
	if (keyName === 'k') {
    litera__k.classList.remove('button__hover');
  }
	if (keyName === 'l') {
    litera__l.classList.remove('button__hover');
  }
	if (keyName === ';') {
    litera__dwopkrap.classList.remove('button__hover');
  }
	
	if (keyName === "'") {
    litera__onekrap.classList.remove('button__hover');
  }
		
	if (keyName === "z") {
    litera__z.classList.remove('button__hover');
  }
	if (keyName === "x") {
    litera__x.classList.remove('button__hover');
  }
	if (keyName === "c") {
    litera__c.classList.remove('button__hover');
  }
	if (keyName === "v") {
    litera__v.classList.remove('button__hover');
  }
	if (keyName === "b") {
    litera__b.classList.remove('button__hover');
  }
	if (keyName === "n") {
    litera__n.classList.remove('button__hover');
  }
	if (keyName === "m") {
    litera__m.classList.remove('button__hover');
  }
	if (keyName === ",") {
    left__arrowww.classList.remove('button__hover');
  }
	if (keyName === ".") {
    right__arrowww.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }

	if (keyName === "Control") {
    ctral.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "?") {
    tochka.classList.remove('button__hover');
  }
	if (keyName === "Meta") {
    win.classList.remove('button__hover');
  }
	if (keyName === "ArrowLeft") {
    arrow__left.classList.remove('button__hover');
  }
	if (keyName === "ArrowRight") {
    arrow__right.classList.remove('button__hover');
  }
	if (keyName === "ArrowDown") {
    arrow__down.classList.remove('button__hover');
  }
	if (keyName === "ArrowUp") {
    top__arrow.classList.remove('button__hover');
  }

	

	




	
	
}, false);