var formKalk = window.document.kalk;
var operat;
var cyfraPierwsza = true;
var walor1 = 0, walor2 = 0;

function cyfraClick(cyfra){

    kolo(cyfra);

    if (cyfraPierwsza || formKalk.txtEkran.value == 0){
        formKalk.txtEkran.value  = cyfra;
        cyfraPierwsza = false;
    }else{
        formKalk.txtEkran.value += cyfra;
    }
}

function operatClick(opr){
    var txtEkran = formKalk.txtEkran.value;
    walor1 = parseFloat(txtEkran);
    operat = opr;
    cyfraPierwsza = true;
}

function rownaClick(){
    var rezultat;
    var txtEkran = formKalk.txtEkran.value;
    walor2 = parseFloat(txtEkran);
    if(operat == "/") {
        rezultat = walor1 / walor2;
    }else if(operat == "*") {
        rezultat = walor1 * walor2;
    }else if(operat == "-"){
        rezultat = walor1 - walor2;
    }else{
        rezultat = walor1 + walor2;
    }
    formKalk.txtEkran.value = rezultat;
    walor1 = rezultat;
    cyfraPierwsza = true;
}

function przecinek(){
    var txtEkran = formKalk.txtEkran.value;
    if (txtEkran.indexOf(".") == -1) {
        txtEkran += ".";
        formKalk.txtEkran.value = txtEkran;
        cyfraPierwsza = false;
    }
}

function CorCE(c){
    formKalk.txtEkran.value = 0;
    cyfraPierwsza = true;

    if (c == "C"){
        walor1 = 0;
        operat = "";
    }
}

function procPlusMinus(ppm){
    if(ppm == "+/-"){
        formKalk.txtEkran.value = parseFloat(formKalk.txtEkran.value) * -1;
    }else{
        formKalk.txtEkran.value = (parseFloat(formKalk.txtEkran.value) / 100) * parseFloat(walor1);
    }
}



function kolo(number) {

    var audio0 = document.getElementById('zero');
    var audio1 = document.getElementById('one');
    var audio2 = document.getElementById('two');
    var audio3 = document.getElementById('three');
    var audio4 = document.getElementById('four');
    var audio5 = document.getElementById('five');
    var audio6 = document.getElementById('six');
    var audio7 = document.getElementById('seven');
    var audio8 = document.getElementById('eight');
    var audio9 = document.getElementById('nine');

    audio0.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio1.pause();


    if(number === 0) {
        audio0.play();
    }

    if(number === 1) {
        audio1.play();
    }

    if(number === 2) {
        audio1.pause();
        audio0.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        audio8.pause();
        audio9.pause();
        audio2.play();
    }

    if(number === 3) {
        audio1.pause();
        audio2.pause();
        audio0.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        audio8.pause();
        audio9.pause();
        audio3.play();
    }

    if(number === 4) {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio0.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        audio8.pause();
        audio9.pause();
        audio4.play();
    }

    if(number === 5) {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio0.pause();
        audio6.pause();
        audio7.pause();
        audio8.pause();
        audio9.pause();
        audio5.play();
    }

    if(number === 6) {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio0.pause();
        audio7.pause();
        audio8.pause();
        audio9.pause();
        audio6.play();
    }

    if(number === 7) {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio0.pause();
        audio8.pause();
        audio9.pause();
        audio7.play();
    }

    if(number === 8) {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        audio0.pause();
        audio9.pause();
        audio8.play();
    }

    if(number === 9) {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        audio8.pause();
        audio0.pause();
        audio9.play();
    }
}


