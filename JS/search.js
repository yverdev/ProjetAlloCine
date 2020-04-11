
    $('#searchInputBar').keyup(function(){
        var search = $(this).val();
        var data = 'keyword' + search;
        moviesToPrint = movies.filter(function (el) { return el.nearly == true && el.nearl == false})
        var respons = $.each([moviesData].title, function(e){
            console.log(respons);
            $("#h").append("Titre" + e + '<br>');
            
        });
        if (search.lenght>1){
            $('#h').html(respons).show();      
         }else{
            $('#h').html('Aucun résultat pour cette recherche !').show();
        }
     });  
