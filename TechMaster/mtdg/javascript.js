function addScreen(id) {
    //lay gia tri cua input 
    temNumber = document.getElementById("hienThi").value;
    document.getElementById("hienThi").value = temNumber + id;
}
function ketQua() {
    a = document.getElementById("hienThi").value.replace(/x/g, "*");
    b=a.replace(/÷/g, "/");
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