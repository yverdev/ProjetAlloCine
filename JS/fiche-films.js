var resume = $('.resume');

function getMovie() {
 var id = window.location.href.split('=')[1];
 var movie = movies.find(function (film) { return film.id == id });
 console.log(movie);
 return movie;
}

var movie = getMovie();

title.text(movie.title);
resume.text(movie.resume);

/* JS formulaire commentaire film */

var form = $('form');
var messageTextarea = $('textarea');
var div = $('div#control');

function onSubmit(event) {
    // 1 empecher la page de se recharger
    event.preventDefault();
 
    // 2 on reset tous les p.error en les masquant
    var nbErrors = 0;
    $('p.error').text("").hide();
    div.hide();
 
    // 3 on récupérer les valeurs de tous les champs
    var message = messageTextarea.val();
    console.log(message);
 
    /*****************************************/
    // Traiter les erreurs du champ message
    // -> le message doit comporter au moins 10 caractères
    // -> le message doit comporter maximum 50 caractères
    if (message.length < 10) {
     messageTextarea.next().text("le message doit comporter au moins 10 caractères").show();
     nbErrors++;
    }
    else if (message.length > 50) {
     messageTextarea.next().text("le message doit comporter maximum 50 caractères").show()
     nbErrors++;
    }
 
    // ON COMPTER LE NOMBRE D'ERREURS
    // 1ere façon : selectionner TOUS les p.error qui ne sont pas masqués
    // nbErrors = $('p.error').not('p.error:hidden').length;
 
    // 2eme façon : déclarer nbErrors = 0, puis l'incrémenter +1 à chaque fois qu'on rencontre une erreur
    console.log(nbErrors);
 
    // On affiche une box d'erreur ou de succès
    // 
    if (nbErrors == 0) {
     div.removeClass('danger');
     div.addClass('success');
     div.text("Coool, le formulaire a été envoyé !").slideDown();
     // poster le formulaire au serveur
    }
    else {
     div.removeClass('success');
     div.addClass('danger');
     div.text("il y " + nbErrors + " erreur(s)").slideDown();
    }
 
   }
 
 
   form.on('submit', onSubmit);



