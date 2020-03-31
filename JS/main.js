/*
	* AU CHARGEMENT DE LA PAGE ON AFFICHE LA LISTE DES FILMS DEPUIS Le ARRAY movies (dans js/data.js)
*/
// Selection de la liste des films
var list = $('.list');
console.log('list');
// On cache la div.details au chargement de la page
$('div.details').hide();
// On affiche le nombre de films
$('.supertitle span').text(movies.length)

// On génère les items des films dans la div.list
for(var i=0; i < movies.length; i++) {
	list.append(`
			<div data-index="${i}" class="col-12 col-md-4 mb-5 item text-center py-2 px-4">

				<div class="card">
                    <img class="card-img-top" src="${movies[i].image}" alt="Card image cap">

                    <div class="card-info">
                    <h2>${movies[i].title}</h2>
                    <p>${movies[i].date}</p>
                    <p>${movies[i].genre}</p>
                    <p>${movies[i].director}</p>
                    <p>${movies[i].duration}</p>

                    </div> 
                    
                      
                    
                    </div>
                   
			</div>
		`)
}


/* $('div.card').hover(function(){
    $(this).slideUp(800);
    //$(this).slideDown(800);
}); */
$('div.card-info').hide();
//var cardInfoHide = $('div.card-info').hide();
//var cardInfoShow = $('div.card-info').show();

$('div.card').hover(function(){
    

    if($('card-img-top').hover()){
        var imgUp = $(this).slideUp(800);
        /* $('div.card-info').show().slideDown(800); */
        if(imgUp==slideUp()){
            $('div.card')
        }
        
        
    };
    /* if(imgUp==0)
    }
     */
});

/* TEST Search Full Screen */
var searchBtn = $('.fa-search');
console.log('searchBtn');

// Open the full screen search box
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  // Close the full screen search box
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

searchBtn.on('click', openSearch);

/* Fin TEST */
