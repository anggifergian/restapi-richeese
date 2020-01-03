function showMenu() {
    $.getJSON("data/menuricheese.json",
        function (data) {
            let menu = data.menu;
    
            $.each(menu, function (i, data) { 
                 $('#menu-list').append(
                     '<div class="col-md-4 col-sm-6"><div class="card mb-3"><img src="" alt="" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">' + data.name + '</h5><p class="card-text">' + data.description + '</p><h6 class="card-title">Rp '+ data.price +'</h5><a href="" class="btn btn-primary">Order</a></div></div></div >'
                 );
            });
        }
    );    
}

showMenu();

$('.nav-item').on('click', function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    $('#titleh1').html(kategori);
    
    if (kategori == 'Home') {
        $('#titleh1').html('All Menu');
        $('#menu-list').html('');
        showMenu();
        return;
    }

    $.getJSON("data/menuricheese.json",
        function (data) {
            let menu = data.menu;
            let content = '';

            $.each(menu, function (i, data) { 
                if (data.category == kategori.toLowerCase()) {
                    content += '<div class="col-md-4 col-sm-6"><div class="card mb-3"><img src="" alt="" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">' + data.name + '</h5><p class="card-text">' + data.description + '</p><h6 class="card-title">Rp '+ data.price +'</h5><a href="" class="btn btn-primary">Order</a></div></div></div >';
                } 
            });

            $('#menu-list').html(content);
        }
    );
});