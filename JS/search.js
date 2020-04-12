
    $('#searchInputBar').on('keyup',function(e){
        $('#searchResult').empty();
        var searchText = $(this).val().toLowerCase();
        var filterMovies = [];
        filterMovies = movies.filter( (movie) => { 
            console.log(movie.title);
            return movie.title.toLowerCase().includes(searchText); 
        });

        // for(let movie of movies) {
        //     if(movie.tile.toLowerCase().includes(searchText)) {
        //         filterMovies.push(movie)
        //     }
        // }


        console.log(filterMovies);

        if(searchText.trim() == '') {
            $('#searchResult').empty();
        }
        else {
            switch(filterMovies.length) {
                case 0:
                    $('#searchResult').html('<div class="alert alert-dark">Aucun résultat</div>')
                break;
                default:
                    for(let movie of filterMovies) {
                        $('#searchResult').append(`
                        <li class="list-group-item">
                            ${movie.title}
                        </li>
                        `)
                    }
                break;
            }
        }

        

        // var textInput = $('#h').html($(this).val());
        // console.log(textInput);
        // var titleBdd;
        // for (var i = 0; i < movies.length; ++i) {
        //     // faire quelque chose avec `array[i]`
        //     titleBdd = movies[i].title;
        //     console.log('titleBdd');  
        // }

        // jQuery.each(movies, function(index, value) {
        //     // faire quelque chose avec `value` (ou `this` qui est `value` )
        //     titleBdd = (index+": "+ value.title);
        //     console.log('titleBdd');
            
        // });
        // if(textInput.toUpperCase() != titleBdd.toUpperCase() && titleBdd.toUpperCase()!= null && titleBdd.toUpperCase() != "" ){
        //     $('#h').html($('#searchInputBar').val());
        // }else{
        //     $('#h').html('Aucun résultat trouvé pour votre recherche.')
        // }
    });
