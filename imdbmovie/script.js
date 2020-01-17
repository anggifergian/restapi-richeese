function searchMovie() {
    var valueinput = $('#inputSearch').val();

    //mengosongkan list menu sebelum memunculkan hasil pencarian
    $('#listMenu').html('');

    //mengosongkan input button setelah menekan button search
    $('#inputSearch').val('');

    //mengambil data setelah menekan button search
    $.ajax({
        type: "get",
        url: "http://omdbapi.com",
        data: {
            "apiKey": "33ceecd2",
            "s": valueinput
        },
        dataType: "json",
        success: function (data) {
            if (data.Response == "True") {

                //get the result of Search object
                let movies = data.Search;

                //looping to display each value of Search object result to Card component
                $.each(movies, function (i, value) {
                    $('#listMenu').append(`
                        <div class="col-md-4">
                            <div class="card mb-3" style="max-">
                                <img src="` + value.Poster + `" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">` + value.Title + `</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">` + value.Year + `</h6>
                                    <button type="button" class="btn btn-outline-primary see-detail" data-toggle="modal" data-target="#modalDetail" data-id="` + value.imdbID + `">
                                        See Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                     `);
                });
            } else {
                $('#listMenu').html(`
                    <div class="col-md-12>
                        <h1 class="text-center">` + data.Error + `</h1>
                    </div>
                `);
            }
        }
    });
}

//add function searchMovie when button search is clicked
$('#buttonSearch').on('click', function () {
    searchMovie();
});

//enable ENTER key to search
$('#inputSearch').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
});

//when listMenu button click, the elemen see-detial would do the function
$('#listMenu').on('click', '.see-detail', function () {
    // console.log($(this).data('id'));

    $.ajax({
        url: "http://omdbapi.com",
        type: "get",
        dataType: "json",
        data: {
            "apiKey": "33ceecd2",
            "i": $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response == "True") {
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="` + movie.Poster + `" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>` + movie.Title + `</h3></li>
                                <li class="list-group-item">Released ` + movie.Released + `</li>
                                <li class="list-group-item">Genre ` + movie.Genre + `</li>
                                <li class="list-group-item">Director ` + movie.Director + `</li>
                                <li class="list-group-item">Actors ` + movie.Actors + `</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `);
            }
        }
    })
})