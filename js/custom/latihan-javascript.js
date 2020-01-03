$(function () {
    // let mahasiswa = {
    //     nama : "Anggi Fergian",
    //     nim : "1610512002",
    //     jurusan : "Sistem Informasi"
    // };

    // object menjadi json
    // console.log(JSON.stringify(mahasiswa));
    

    // json menjadi object
    // kalo berhasil jalankan fungsi function
    // $.ajax({
    //     type: "post",
    //     url: "http://localhost/mabitnurulfikri/coba.json",
    //     data: "data",
    //     dataType: "json",
    //     success: function (data) {
    //         console.log(data);
    //     }
    // });

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let mahasiswa = JSON.parse(this.responseText);
            console.log(mahasiswa);
        }
    }

    xhr.open('GET', 'http://localhost/mabitnurulfikri/coba.json', true);
    xhr.send();
})