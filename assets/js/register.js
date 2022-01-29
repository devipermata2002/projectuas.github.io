$(document).ready(function () {
    // mengambil sumbit button
      $("#btn-submit").click(function () {
  
        let Nama = $("input[name='nama']").val();
        let Alamat = $("input[name='alamat']").val();
        let Tlp = $("input[name='nomort']").val();
        let Email = $("input[name='email']").val();
        let Username = $("input[name='username']").val();
        let Password = $("input[name='password']").val();
        let C_Password = $("input[name='c_password']").val();
  
        if (!Nama || !Alamat || !Tlp || !Email || !Username || !Password || !C_Password) {
          alert("Inputan masih ada yang kosong");
        }
        else {  
            // cek confirm pass
            if(Password != C_Password){
                alert("Confirm Password Harus Sama");
            }  
            // masukan ke jquery
            else{
                sessionStorage.setItem('Nama', Nama);
                sessionStorage.setItem('Alamat', Alamat);
                sessionStorage.setItem('Tlp', Tlp);
                sessionStorage.setItem('Email', Email);
                sessionStorage.setItem('Username', Username);
                sessionStorage.setItem('Password', Password);
                sessionStorage.setItem('C_Password', C_Password);
        
                alert("Register Berhasil");
                window.location.href = "tampil.html";
            }      
        }
      });

      $("#btn-reset").click(function()
      { 
        $("input[type='text']").val("");
        $("input[type='number']").val("");
        $("input[type='email']").val("");
        $("input[type='username']").val("");
        $("input[type='password']").val("");
      });
    });