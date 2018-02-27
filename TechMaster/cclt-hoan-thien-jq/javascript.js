function addScreen(id) {
    temNumber = document.getElementById("hienThi").value;
    document.getElementById("hienThi").value = temNumber + id;
}

function addScreenDau(dau) {
    var str = document.getElementById("hienThi").value;
    var a = str.length;
    if (a == 0 || (str[0] == '-' && a < 2)) {
        str = '';
    } else if (str[a - 1] == 'x' || str[a - 1] == '÷' || str[a - 1] == '+' || str[a - 1] == '-' || str[a - 1] == '.') {
        str = str.slice(0, (a - 1));
        str = str + dau;
    } else {
        str = str + dau;
    }
    document.getElementById("hienThi").value = str;
}

function xoaMotKiTu() {
    var str = document.getElementById("hienThi").value;
    var a = str.length;
    str = str.slice(0, (a - 1));
    document.getElementById("hienThi").value = str;
}

function dauCham() {
    var str = document.getElementById("hienThi").value;
    var a = str.length;
    if (str[a - 1] == 'x' || str[a - 1] == '÷' || str[a - 1] == '+' || str[a - 1] == '-') {
        str = str + '0.';
    } else if (str[a - 1] == '.' && str[a - 2] == '0') {
        str = str.slice(0, (a - 2));
    } else if (str[a - 1] == '.' || a == 0) {
        str = str.slice(0, (a - 1));
    } else {
        str = str + '.';
    }
    document.getElementById("hienThi").value = str;
}

function dauAm() {
    var str = document.getElementById("hienThi").value;
    var a = str.length;
    if (str[0] == '-') {
        str = str.slice(1, (a));
    } else {
        str = '-' + str;
    }
    document.getElementById("hienThi").value = str;
}

function ketQua() {
    a1 = document.getElementById("hienThi").value.replace(/x/g, "*");
    b = a1.replace(/÷/g, "/");
    ketquapheptoan = eval(b);
    document.getElementById("hienThi").value = ketquapheptoan;
}

function binhphuong() {
    temNumber1 = document.getElementById("hienThi").value;
    x = Number(temNumber1) * Number(temNumber1);
    document.getElementById("hienThi").value = x;
}

function giaithua() {
    x = document.getElementById("hienThi").value;
    var a = 1;
    for (var i = 1; i <= x; i++) {
        a = a * i;
    }
    document.getElementById("hienThi").value = a;
}

function canbachai() {
    x = Math.sqrt(document.getElementById("hienThi").value);
    document.getElementById("hienThi").value = x;
}

function ac() {
    document.getElementById("hienThi").value = "";
}

function motChiaX() {
    x = document.getElementById("hienThi").value;
    document.getElementById("hienThi").value = 1 / x;
}
