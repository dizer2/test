let inputName = document.getElementById('upload-photo');

let reserv = text__file.innerText;


rerstar.onclick = function(){
	loading__file.classList.remove('loading__file__activation');
}


inputName.addEventListener('change', function(){
	loading__file.classList.add('loading__file__activation');
  let changed =  text__file.textContent = this.files[0].name;
  let newChanged = changed;
	let indexTochka = newChanged.lastIndexOf('.');
  let sliceText = newChanged.slice(indexTochka);
	// ggg.innerText = sliceText;

	if (sliceText == '.jpg' || sliceText == '.png' || sliceText == '.svg'  || sliceText == '.jpeg' || sliceText == '.gif' || sliceText == '.tga' || sliceText == '.psd') {
	  desription.innerText = 'photo';

	} else if (sliceText == '.zip') {
	  desription.innerText = 'zip file';
	} else if (sliceText == '.aac' || sliceText == '.adt' || sliceText == '.adts') {
	  desription.innerText = 'windows aydio file';

	}else if (sliceText == '.bat') {
		desription.innerText = 'PC batch file';

	} else if (sliceText == '.bin') {
		desription.innerText = 'Binary compressed file';
	} else if (sliceText == '.doc' || sliceText == '.docm' || sliceText == '.dot' || sliceText == '.dotx'){
		desription.innerText = 'Microsoft Word document';

	}else if (sliceText == '.html') {
		desription.innerText = 'Hypertext Markup Language page';
		
	}else if (sliceText == '.scss') {
		desription.innerText = 'Like css only cooler';

	}else if (sliceText == '.css') {
		desription.innerText = 'This was style about html language';
	}else if (sliceText == '.js') {
		desription.innerText = 'Javascrip file';
	}else if (sliceText == '.java') {
		desription.innerText = 'Java file';

	}else if (sliceText == '.py') {
		desription.innerText = 'Python file';

	}else if (sliceText == '.с') {
		desription.innerText = 'C programming language';

	}else if (sliceText == '.сsharp') {
		desription.innerText = 'C# programming language';

	}else if (sliceText == '.сpp') {
		desription.innerText = 'C++ programming language';

	}else if (sliceText == '.dart') {
		desription.innerText = 'Dart programming language';

	}else if (sliceText == '.git-commit') {
		desription.innerText = 'git commit';
	}else if (sliceText == '.go') {
		desription.innerText = 'GO programming language';

	}else if (sliceText == '.hlsl') {
		desription.innerText = 'hlsl programming language';

	}else if (sliceText == '.php') {
		desription.innerText = 'Php programming language';

	}else if (sliceText == '.mp3') {
		desription.innerText = 'mp3 file';

	}else if (sliceText == '.mp4' || sliceText == '.ts'|| sliceText == '.m3u8' ) {
		desription.innerText = 'video file';

	}else if (sliceText == '.pdf') {
		desription.innerText = 'pdf file';

	}else if (sliceText == '.pot' || sliceText == '.potm' || sliceText == '.potx' || sliceText == '.ppam' || sliceText == '.pps' || sliceText == '.ppsm' || sliceText == '.ppsx' || sliceText == '.pptm' || sliceText == '.pptx' || sliceText == '.ppt' || sliceText == '.sldm'  || sliceText == '.sldx' ){
		desription.innerText = 'Microsoft PowerPoint document';

	}else if (sliceText == '.psd') {
		desription.innerText = 'Adobe Photoshop file';
		
	}else if (sliceText == '.sys') {
		desription.innerText = 'System settings file';

	}else if (sliceText == '.txt') {
		desription.innerText = 'Plain text file';


	}else if (sliceText == '.xla' || sliceText == '.xlam' || sliceText == '.xll' || sliceText == '.xlm' || sliceText == '.xls' || sliceText == '.xlsm' || sliceText == '.xlsx' || sliceText == '.xlt' || sliceText == '.xltm' || sliceText == '.xltx' || sliceText == '.sldm'  || sliceText == '.sldx' ){
		desription.innerText = 'Microsoft Excel document';

	}else if (sliceText == '.exe') {
		desription.innerText = 'exe file';
	}else if (sliceText == '.torrent') {
		desription.innerText = 'torrent file';

	}else if (sliceText == '.json') {
		desription.innerText = 'json file';

	}else{
	  desription.innerText = 'Sorry this program dont known this type file';

	}



});















