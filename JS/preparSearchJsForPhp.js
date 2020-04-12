$('#searchInputBar').keyup(function(){
    var search = $(this).val();
    var data = 'keyword' + search;
    if (search.lenght>2){
        $.ajax({
            type: "GET",
            url: "result.php",
            data: data,
            success : function(server_respons){

                $('#resultsearch').html(server_respons).show();
            }       
        });
    }
});

fetch('').then(function(res) {filterMovies = res.result})
.catch(e) {}
