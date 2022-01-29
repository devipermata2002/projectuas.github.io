$(document).ready(function () {

    let userSession = sessionStorage.getItem("Username");
    let passSession = sessionStorage.getItem("Password");

      $("#btn-login").click(function () {

        console.log(userSession);
        console.log(passSession);

        if (!$("#username").val()) {
          alert("Username Masih Kosong");
        } else if (!$("#password").val()){
          alert("Password Masih Kosong");
        }else {
          var username = $("#username").val();
          var password = $("#password").val();
          
          if(username == userSession && password == passSession){
            window.location.href = "tampil.html";
          }
          else{
            alert("Username dan Password salah!");
          }
        }
      });

      $("#btn-reset").click(function(){
        $("#username").val("");
        $("#password").val("");
      });

    });