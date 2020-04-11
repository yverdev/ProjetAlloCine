
    $('#searchInputBar').keyup(function(){
        var search = $(this).val();
        var data = 'keyword' + search;
        var respons = movies;
        console.log(respons);
        if (search.lenght>1){
            $('#h').html(respons).show();      
        }else{
            $('#h').html('Aucun résultat pour cette recherche !').show();
        }
    });  

