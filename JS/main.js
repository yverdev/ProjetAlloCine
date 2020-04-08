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
    <style>
    .item {position: relative;
    width: 300px;
    height: 400px;
    overflow: hidden;
    background-size: cover;
    margin:4%;
    padding: 0px;}
    .card-info {top: 100%;
      position: relative;
      transition: all .8s ease-in-out;
      height: 100%;
      background-color: rgba(0,0,0,0.8);
      color: #fff;
      padding: 2% 5% 2% 5%;
    }
    .card-info h2{
      margin: 0;
    }
    .card-info p{
      margin: 0;
    }
    .item:hover > .card-info{
      top: 0;
    }
    .item:hover{
      background:hidden;
    }
    </style>
    <div class="item col-3 text-center" style="background-image:url(${moviesToPrint[i].image})" data-index="${movies[i].id}">
      <div class="card-info d-flex align-content-between row justify-content-center">
        <div >
          <h2>${moviesToPrint[i].title}</h2>
          <p>${moviesToPrint[i].date}</p>
          <p>${moviesToPrint[i].genre}</p>
          <p>${moviesToPrint[i].director}</p>
          <p>${moviesToPrint[i].duration}</p>
        </div>  
      </div>
      <div class="row justify-content-center">
      <div class="col-9 col-sm-6 col-md-4 col-lg-3 col-xl-3 justify-content-start bgc-btn-play" data-toggle="modal" data-target="#trailerAffiche">
        <i class="far fa-play-circle"></i>
      </div>
        <div class="modal fade" id="trailerAffiche" tabindex="-1" role="dialog" aria-labelledby="Title" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="Title">${movies[i].title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="traileryt">
                <iframe width="560" height="315" src="${movies[i].traileryt}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="bgc-btn-film">
          <a href="fiche-films.html">Fiche Film</a>
        </div>
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