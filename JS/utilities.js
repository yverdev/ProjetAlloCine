
function sgetMoviesFromLocalStorage() {
    localStorage.setItem('movies', JSON.stringify(movies));
   }
   
   function getIdParamFromUrl() {
    var url = window.location.href;
    var queryString = url.split('=');
    var idParam = queryString[1];
    return idParam;
   }
   
   function printDuration(duration) {
    var hours;
    var minutes;
    hours = Math.floor(duration / 60);
    minutes = duration % 60;
    if (minutes < 10) { minutes = '0' + minutes }
    return hours + 'h' + minutes + 'm'
   }
   
   function printDateFr(dateEn) {
    var piecesOfDate = dateEn.split('-');
    return piecesOfDate[2] + '/' + piecesOfDate[1] + '/' + piecesOfDate[0]
   }