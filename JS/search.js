
    $('#searchInputBar').on('input',function(e){
        var textInput = $('#h').html($(this).val());
        console.log('textInput');
        var titleBdd;
        // for (var i = 0; i < movies.length; ++i) {
        //     // faire quelque chose avec `array[i]`
        //     titleBdd = movies[i].title;
        //     console.log('titleBdd');  
        // }

        jQuery.each(movies, function(index, value) {
            // faire quelque chose avec `value` (ou `this` qui est `value` )
            titleBdd = (index+": "+ value.title);
            console.log('titleBdd');
            
        });
        // if(textInput.toUpperCase() != titleBdd.toUpperCase() && titleBdd.toUpperCase()!= null && titleBdd.toUpperCase() != "" ){
        //     $('#h').html($('#searchInputBar').val());
        // }else{
        //     $('#h').html('Aucun résultat trouvé pour votre recherche.')
        // }
    });
