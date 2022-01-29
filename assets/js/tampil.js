$("input[name='nama']").val(sessionStorage.getItem("Nama"));
$("input[name='alamat']").val(sessionStorage.getItem("Alamat"));
$("input[name='nomort']").val(sessionStorage.getItem("Tlp"));
$("input[name='email']").val(sessionStorage.getItem("Email"));
$("input[name='username']").val(sessionStorage.getItem("Username"));
$("input[name='password']").val(sessionStorage.getItem("Password"));
document.getElementById("Username").innerHTML = sessionStorage.getItem("Username");

var months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
var myDays = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var thisDay = date.getDay(), thisDay = myDays[thisDay];
var yy = date.getYear();
var year = yy < 1000 ? yy + 1900 : yy;
document.getElementById("Hari").innerHTML = thisDay + ", " + day + " " + months[month] + " " + year;
$("#btn-reset").click(function() {

    var r = confirm("Perhatian!!!. Anda Ingin Mereset Data Anda ?");
    if (r == true) {
        alert("Data anda telah di reset, Harap register ulang!!!");
        sessionStorage.clear();
        window.location.href = "login.html";
    }
})