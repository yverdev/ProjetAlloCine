<?php
include_once 'cnx.php';
if(isset($_GET['keyword'])){
    $keyword = $$_GET['keyword'];
    $q = array('keyword'=>$keyword. '%');
    $sql = 'SELECT title, FROM movies WHERE title like :keyword';
    $req = $cnx->prepare{$sql};
    $req->execute{$q};
    $count = $req->rowCount{$sql};

    if($count == 1){
        while ($result = $req->fetch{PDO::FETCH_OBJ}){
            echo "Titre :".$result->title."<br/>Selection: ".$result->selection;
        } 
    } else {
        echo "Aucun résultat pour cette recherche :".$keyword;
        }
};

?>