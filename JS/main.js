/*
	* AU CHARGEMENT DE LA PAGE ON AFFICHE LA LISTE DES FILMS DEPUIS Le ARRAY movies (dans js/data.js)
*/
// Selection de la liste des films
var alAfficheElt = $('.list'); // Tous les films à l'affiche
var aVenirElt = $('.nextlist'); // Films à venir

// On affiche le nombre de films
$('.supertitle span').text(movies.length)

// On génère les items des films dans la div.list
function printMoviesList(critere) {
  let moviesToPrint; // liste des films à afficher
  if (critere == 'alaffiche') {
    target = alAfficheElt;
    moviesToPrint = movies;
  }
  else if (critere == 'avenir') {
    target = aVenirElt;
    moviesToPrint = movies.filter(function (el) { return el.nearly == true })

  }
  for (var i = 0; i < moviesToPrint.length; i++) {
    target.append(`
        <div style="background-image:url(${moviesToPrint[i].image})" 
             data-index="${movies[i].id}" 
             class="col-12 col-md-4 cl-lg-3 item text-center test">
            <div class="card-info  ">
              <h2>${moviesToPrint[i].title}</h2>
              <p>${moviesToPrint[i].date}</p>
              <p>${moviesToPrint[i].genre}</p>
              <p>${moviesToPrint[i].director}</p>
              <p>${moviesToPrint[i].duration}</p>
            </div>  
        </div>   
      `)
  }
  $('div.item').on('click', getDetail);  // Sur l'elt div.test Au click sur l'image appeller la fonction getDetail
} // fin function printMoviesList()


function getDetail() {
  window.location.href = 'fiche-films.html?id=' + $(this).data('index'); //
}



/* $('div.card').hover(function(){
    $(this).slideUp(800);
    //$(this).slideDown(800);
}); */
//$('.card-info').hide();
//var cardInfoHide = $('div.card-info').hide();
//var cardInfoShow = $('div.card-info').show();

/* $('.card-img-top').hover(function(){
  $(this).slideUp(800);
  console.log(this);
  
}); */

/* $('.card-info').hide(function(){
  $(this).show();
  console.log('.card-info');
}); */

/* $('div.card').hover(function(){
  var thisCard = $('div.car').val();

    
  if($('.card-img-top').hover()){
    $(this).slideUp(800).val();
      
    
  };

  $('.card-info').removeClass(function(){
    $(this).removeClass('hide');
  });
}); */


/* 
YANN
*/
/* 



var idFilm = $('.card')
idFilm.mouseover(function(e){
  $('.card-img-top').hide(2000, 'linear');
  
}).mouseout(function(e){
  $('.card-img-top').show(2000, 'linear');
  e.stopPropagation();
  e.eventPreventDefault();// Pour empecher le rechargement
}) */

/* 
FIN YANN
*/




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

printMoviesList('alaffiche');
printMoviesList('avenir');
searchBtn.on('click', openSearch);

/* Fin TEST */