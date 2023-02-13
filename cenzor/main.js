let str = '';
let btnTrigger = false;

$('#addBtn').click(function(){
    if(word.value != 0){
        let gg = word.value
    if(btnTrigger==false){
        btnTrigger = true;
        str += ($('#word').val());
        $('#word').val('');
        $('.cenzor__max').append(`<div class="cenzor__zamit">
        <div class="header__zamit">
    <img class="close" id="close" src="./close.svg" alt="img">
        </div>
        <div class="main__zamit">
<p id="listWord" class="listWord">${gg}</p>
        </div>
    </div>`);
    $('.cenzor__zamit').click(function(){
        $(this).hide();
        let hehe2 = $(this).find('.listWord');
        let innetHehe2 = hehe2[0].innerText;
        let controlObject = typeof(str)
        if(controlObject != 'object'){
        str = str.split(",");
        }
        console.log(innetHehe2)
        for (var i=str.length-1; i>=0; i--) {
            if (str[i] === innetHehe2) {
                str.splice(i, 1);
            }
        }
    });

    }else{
        str += ',' + ($('#word').val());
        $('#word').val('');
        $('.cenzor__max').append(`<div class="cenzor__zamit">
        <div class="header__zamit">
    <img class="close" id="close" src="./close.svg" alt="img">
        </div>
        <div class="main__zamit">
<p id="listWord" class="listWord">${gg}</p>
        </div>
    </div>`);
    $('.cenzor__zamit').click(function(){
        $(this).hide();
        let hehe2 = $(this).find('.listWord');
        let innetHehe2 = hehe2[0].innerText;
        let controlObject = typeof(str)
        if(controlObject != 'object'){
        str = str.split(",");
        }
        console.log(innetHehe2)
        for (var i=str.length-1; i>=0; i--) {
            if (str[i] === innetHehe2) {
                str.splice(i, 1);
            }
        }
    });
    }
}
});

$('#cenzor').click(function(){
    let controlObject2 = typeof(str)
    if(controlObject2 != 'object'){
        str = str.split(",");
    }
    console.log(str)
    let words = str;
    let allText = clearArr($('#textInfo').val().split(' '));
    console.log(words);
    if(words == ''){
        word.classList.add('word');
    }
    if(words != ''){
        word.classList.remove('word');
    }
    console.log(allText);
   
    for(let i=0; i<allText.length; i++){
        for(let j=0; j<words.length; j++){
            if(allText[i].indexOf(words[j]) != -1){
                allText[i] = symbolReplace(allText[i]);
            }
        }
    }
    $('#textInfo').val(allText.join(' '));
})

function clearArr(arr){
    let res = [];
    for(let i=0; i<arr.length;i++){
        if(arr[i]!=''){
            res.push(arr[i]);
        }
    }
    return res;
}

function symbolReplace(word){
    let res='';
    for (let i = 0; i < word.length; i++) {
        console.log(word[i])
        if (word[i] != ")" && word[i] != "@" && word[i] != "?" && word[i] != "!" && word[i] != "%" && word[i] != "," && word[i] != "#" && word[i] != "*" && word[i] != "{" && word[i] != "&" && word[i] != "$" && word[i] != "(" && word[i] != "." && word[i] != "-" && word[i] != "/" && word[i] != "}") {
            res += "*";
        }else {
            res += word[i];
        }
    }
    return res;
   
}



