/* selections elements du detail film */
var titleElt = $('h1.title');
var resumeElt = $('p.resume');
var imgElt = $('img.image');
var iframe = $('iframe');
var modalTitle = $('.modal-title');
var commentsListElt = $('div.commentsList ul');
var dateElt = $('p.date');
var durationElt = $('p.duration');
var originaltitleElt = $('p.originaltitle');
var actorsElt = $('p.actors');
var directorElt = $('p.director');
var trailerBtn = $('button.trailer');
var bkgImageElt = $('.movie-bgc');

/* selections formulaire commentaire film */
var form = $('form');
var messageTextarea = $('textarea');
var scoreSelect = $('select');
var div = $('div#control');

/*
    getMovie()
    Récuperer le bon objet film
*/
function getMovie() {
    var id = getIdParamFromUrl();
    var movie = movies.find(function (film) { return film.id == id });
    console.log(movie);
    return movie;
}

$('.trailer-modal .close').on('click', function () {
    $('.trailer-modal iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  });
/* 
 printMovieDetail()
 Afficher les details du film
*/
function printMovieDetail() {
    if (movie.bkgimage != null) {
        bkgImageElt.css('background-image', `url(${movie.bkgimage})`);
    }
    else {
        bkgImageElt.css('background-image', `linear-gradient(rgb(81, 85, 115), rgb(21, 47, 123))`);
    }

    titleElt.text(movie.title);
    modalTitle.text(movie.title);
    originaltitleElt.text(movie.originaltitle);
    resumeElt.text(movie.resume);
    dateElt.text(printDateFr(movie.date));
    durationElt.text(printDuration(movie.duration));
    imgElt.attr('src', movie.image);
    iframe.attr('src', movie.traileryt + "?version=3&enablejsapi=1");
    // Afficher la liste des acteurs
    var actorsStr = '';
    for (var actor of movie.actors) {
        actorsStr += actor + ' | ';
    }
    actorsElt.text(actorsStr);
    // afficher le réalisteur
    directorElt.text(movie.director);
}


/*
    A la soumission du form
    onSubmit()
*/
function onSubmit(event) {
    // 1 empecher la page de se recharger
    event.preventDefault();
    // 2 on reset tous les p.error en les masquant
    var nbErrors = 0;
    $('p.error').text("").hide();
    div.hide();
    // 3 on récupérer les valeurs de tous les champs
    var message = messageTextarea.val();
    var score = scoreSelect.val();
    console.log(message);
    console.log(score);
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

    // Traiter les erreurs du champ select score 
    if (score == 0) {
        scoreSelect.next().text("Ajoutez une note pour laisser votre avis").show();
    }
    console.log(nbErrors);

    // On affiche une box d'erreur ou de succès
    // 
    if (nbErrors == 0) {
        div.slideUp()
        // div.removeClass('danger');
        // div.addClass('success');
        // div.text("Coool, le formulaire a été envoyé !").slideDown();
        // poster le formulaire au serveur
        movie.comments.push({ avis: message, score: score });
        printCommentsList();

    }
    else {
        div.removeClass('success');
        div.addClass('danger');
        div.text("il y " + nbErrors + " erreur(s)").slideDown();
    }

}



/*
    printCommentsList()
*/
function printCommentsList() {
    commentsListElt.empty();
    for (var i = 0; i < movie.comments.length; i++) {
        commentsListElt.prepend(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>
                <img class="img-thumbnail mr-4" width="50px" src="https://api.randomuser.me/portraits/lego/8.jpg">
                ${movie.comments[i].avis}
            </span>
            <span class="badge badge-warning">
                ${movie.comments[i].score}/5
            </span>

        </li>
        `)
    }
}

/*
    CODE PRINCIPAL
*/
var movie = getMovie();
printMovieDetail();
printCommentsList();

form.on('submit', onSubmit);
trailerBtn.on('click', function () {
    $('.trailer-modal').modal('show')
})



