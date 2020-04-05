var form = $('form');
var nomInput = $('input');
var prenomInput = $('input');
var emailInput = $('input');
var selectionSelect = $('select');
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
    var nom = nomInput.val();
    var prenom = prenomInput.val();
    var email = emailInput.val();
    var selection = selectionSelect.val();
    var message = messageTextarea.val();
    console.log(prenom);
    console.log(situation); // "0", "1", "2", "3"
    console.log(message);
 
    // Traiter les erreurs du champ prenom 
    //  -> le champ doit contenir un prenom 
    //  -> le prénom doit comporter au moins 2 caractères
    if (nom.length == 0) {
     // injecter le texte "le champ doit contenir un nom" dans le p qui suit l'input
     nomInput.next().text("le champ doit contenir un nom").show();
     nbErrors++;
    }
    else if (nom.length < 2) {
     nomInput.next().text("le nom doit comporter au moins 2 caractères").show();
     nbErrors++;
    }
 
    if (prenom.length == 0) {
        // injecter le texte "le champ doit contenir un prenom" dans le p qui suit l'input
        prenomInput.next().text("le champ doit contenir un prénom").show();
        nbErrors++;
    }
    else if (prenom.length < 2) {
        prenomInput.next().text("le prénom doit comporter au moins 2 caractères").show();
        nbErrors++;
    }

    if (email.length == 0) {
        // injecter le texte "le champ doit contenir un email" dans le p qui suit l'input
        emailInput.next().text("le champ doit contenir un email").show();
        nbErrors++;
    }
    else if (email.length < 2) {
        emailInput.next().text("l'email' doit comporter au moins 2 caractères").show();
        nbErrors++;
    }

    /*****************************************/
    // Traiter les erreurs du champ situation
    //-> vous devez sélectionner un choix
    if (selection == 0) {
     selectionSelect.next().text("vous devez sélectionner un choix").show();
     nbErrors++;
    }
 
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


