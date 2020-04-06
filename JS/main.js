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
      <style>
      
      .test {background-image: url(${movies[i].image});position: relative;
      
      width: 300px;
      height: 400px;
      overflow: hidden;
      background-size: cover;
      padding: 0px;}

      .card-info {top: 100%;
        position: relative;
        transition: all .8s ease-in-out;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        color: #fff;}
        
      .card-info h2{
            margin: 0;
            
        }
    

      .test:hover > .card-info{
        top: 0;
      }
      .test:hover{
        background:hidden;
      }

      </style>
			<div data-index="${i}" class="col-12 col-md-4 cl-lg-3 item text-center  test">

				
          

          <div class="card-info  ">
            <h2>${movies[i].title}</h2>
            <p>${movies[i].date}</p>
            <p>${movies[i].genre}</p>
            <p>${movies[i].director}</p>
            <p>${movies[i].duration}</p>

          </div> 
          
            
          
        
          
        
      </div>
      
		`)
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
/* function getDetail() {
  window.location.href = 'fiche-films.html?id=' + $(this).data('id');
}

$('div.card').on('click', getDetail);

var idFilm = $('.card')
idFilm.mouseover(function(e){
  $('.card-img-top').hide(2000, 'linear');
  
}).mouseout(function(e){
  $('.card-img-top').show(2000, 'linear');
  e.stopPropagation();
  e.eventPresentDefault();
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

searchBtn.on('click', openSearch);

/* Fin TEST */