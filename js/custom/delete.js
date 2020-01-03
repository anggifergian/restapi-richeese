$(function () {
    $('.showModalDelete').on('click', function () {
        const id = $(this).data('id');

        $.ajax({
            method: 'post',
            url: "http://localhost/mabitnurulfikri/public/pengajar/getDelete",
            data: {id : id},
            dataType: "json",
            success: function (data) {
                //untuk kirim data ke view
                $('#idDelete').val(data.id);
                $('#nameDelete').val(data.name);
            }
        });
    });
})