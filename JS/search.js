
    $('#searchInputBar').on('keyup',function(){
        $('#searchResult').empty();
        var searchText = $(this).val().toLowerCase();
        var filterMovies = [];
        filterMovies = movies.filter( (movie) => { 
            console.log(movie.title);
            return movie.title.toLowerCase().includes(searchText); 
        });
        
        // Version boucle javascript:
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
                            <li class="list-group-item choice-film">
                                ${movie.title}
                            </li>
                        `)
                    }
                break;
            }
        } 
    });

    // $('.choice-film').on('click', function (){

    // };
