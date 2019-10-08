var _tab;



function flashMsg(msg) {
    var flash = document.getElementById('flash');
    flash.innerHTML = msg;
}
function getSiblingByClass(el, classname) {
    return el.parentElement.querySelector(classname);
}
function getLocaleFlash(btn) {
    return btn.parentElement.querySelector(".flash");
}



function ex01(btn) {
    var flash = getLocaleFlash(btn)
    var msg = '';
    var names = ['Albertine', 'Julie', 'Florence', 'julienne', 'Lucie'];
    names.forEach(name => {
        msg += `<span class="ex01">${name}<span><br>`;
    });
    flash.innerHTML = msg;
}
function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ex02(btn) {
    _tab = [];
    for (let i = 0; i < 5; i++) {
        _tab[i] = myRandom(1, 100);
    }
    var flash = getLocaleFlash(btn)
    flash.innerHTML = '[' + _tab.toString() + ']';

    btn.parentElement.querySelectorAll('.hide').forEach(el => {
        el.classList.replace('hide', 'show');
    });
}
function ex02_min(btn) {
    alert('le minimun est :' + Math.min.apply(Math, _tab));
    btn.parentElement.querySelectorAll('.show').forEach(el => {
        el.classList.replace('show', 'hide');
    });
}
function ex02_max(btn) {
    alert('le maximun est :' + Math.max.apply(Math, _tab));
    btn.parentElement.querySelectorAll('.show').forEach(el => {
        el.classList.replace('show', 'hide');
    });
    console.log(_tab);
}
function ex03(btn) {
    var flash = getLocaleFlash(btn);
    flash.innerHTML = '[' + _tab.sort().toString() + ']';
}
function ex04(btn) {
    tablo = "<table>"
    for (i = 0; i < fruits.length; i++) {
        tablo += "<tr><td>" + i + "</td><td>" + fruits[i] + "</td></tr>";
    }
    tablo += "</table>";
    document.getElementById('desfruits').innerHTML = tablo;
    var fruits = ['BANANE', 'ANANAS'];
    document.getElementById("taille").innerHTML = fruits.length;
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i] == "BANANE") { document.getElementById("idbanana").innerHTML = i; }
    }
    ex04();
    function ajoutfruit() {
        fruits.push(document.getElementById("fruitos").value);
        console.log(document.getElementById("fruitos").value);
        console.log(fruits);
        ex04();
    }
} 
