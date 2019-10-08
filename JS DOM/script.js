// EXERCICE 1

function searchChar() {
    var str = document.getElementById("nom").value;
    var res = str.charAt(4);
    document.getElementById("prenom").value = res;
}

// EXERCICE 2

function searchDate() {
    var str = document.getElementById('date').value;
    var date = new Date(str);
    var jour = date.getDay();
    var mois = date.getMonth();
    var année = date.getFullYear();
    document.getElementById("jour").value = jour;
    document.getElementById("mois").value = mois;
    document.getElementById("année").value = année;
}

// EXERCICE 3

function displayExt() {
    var str = document.getElementById("dom").value;
    var ext = str.split('.').pop();
    document.getElementById("ext").value = ext;
}

// EXERCICE 4

function convertText() {
    var str = document.getElementById("min").value;
    var maj = str.toUpperCase();
    document.getElementById("max").value = maj;
}

// EXERCICE 5

var inputs = document.getElementsByTagName('input');
var email = document.getElementById('email');
var user = document.getElementById('user');
var select = document.getElementById('select');
var submit = document.getElementById('submit');

email.onblur = function () {
    if (!email.value.includes('@')) {
        email.classList.add('invalid');
        error.innerHTML = 'Veuillez entrer une adresse mail valide';
        submit.disabled = true;
    }
    if (email.value == "") {
        email.classList.add('invalid');
        error.innerHTML = 'Un des champs est vide';
        submit.disabled = true;
    }
};
email.onfocus = function () {
    if (email.classList.contains('invalid')) {
        email.classList.remove('invalid');
        error.innerHTML = "";
        submit.disabled = false;
    }
};
user.onblur = function () {
    if (user.value == "") {
        user.classList.add('invalid');
        error.innerHTML = 'Un des champs est vide';
        submit.disabled = true;
    }
};
user.onfocus = function () {
    if (user.classList.contains('invalid')) {
        user.classList.remove('invalid');
        error.innerHTML = "";
        submit.disabled = false;
    }
};

text.onblur = function () {
    if (text.value == "") {
        text.classList.add('invalid');
        error.innerHTML = 'Un des champs est vide';
        submit.disabled = true;
    }
};
text.onfocus = function () {
    if (text.classList.contains('invalid')) {
        text.classList.remove('invalid');
        error.innerHTML = "";
        submit.disabled = false;
    }
};

