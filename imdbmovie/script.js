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
                                    <a href="#" class="btn btn-outline-primary">See Detail</a>
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