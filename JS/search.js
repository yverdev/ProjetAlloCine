
    $('#searchInputBar').keyup(function(){
        var search = $(this).val();
        var data = 'keyword' + search;
        var respons = $.each(movies, function(index, value){
            $("#h").append(index + ": " + value + '<br>');
        });

        console.log(respons);
    //     if (search.lenght>1){
    //         $('#h').html(respons).show();      
    //     }else{
    //         $('#h').html('Aucun résultat pour cette recherche !').show();
    //     }
     });  

