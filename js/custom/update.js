$(function () {

    $('.showModalAdd').on('click', function () {
        $('#modalTitle').html('Add Data Pengajar');
        $('.modal-footer button[type=submit]').html('Save');
        if ($('.modal-footer button[type=submit]').hasClass('btn-warning')) {
            $('.modal-footer button[type=submit]').removeClass('btn-warning').addClass('btn-success');
        }
        //Merest Form Kembali Kosong
        $('.modal-body form')[0].reset();
    })

    $('.showModalUpdate').on('click', function () {
        $('#modalTitle').html('Edit Data Pengajar');
        $('.modal-footer button[type=submit]').html('Update');
        $('.modal-footer button[type=submit]').removeClass('btn-success').addClass('btn-warning');
        $('.modal-body form').attr('action','http://localhost/mabitnurulfikri/public/pengajar/updatePengajar');

        const id = $(this).data('id');

        $.ajax({
            // IF POST 404 NOT FOUND, IT MEANS url HAS WRONG DIRECTORY
            url: "http://localhost/mabitnurulfikri/public/pengajar/getEdit",
            data: {id : id},
            method: 'post',
            dataType: "json",
            success: function (data) {
                $('#id').val(data.id);
                $('#name').val(data.name);
                $('#position').val(data.position);
                $('#office').val(data.office);
                $('#age').val(data.age);
                $('#salary').val(data.salary);
            }
        });
   });
});