<?php 

// Le header 'Access-Control-Allow-Origin: *' 
// précise que l'application cliente Ionic 4 
// non présente sur le serveur 
// doit pouvoir accéder à ce script PHP 
// (requêtes dites "cross-sites"). 
header('Access-Control-Allow-Origin: *'); 

// Le header 'Content-Type: application/json' 
// précise la nature du renvoi 
// fait par le script PHP (ici JSON). 
header('Content-Type: application/json'); 

// Le header 'Access-Control-Allow-Methods: GET' 
// indique les méthodes d'accès autorisées (GET/POST/...) 
header('Access-Control-Allow-Methods: GET'); 


// UTF-8 = Encodage par défaut 
mb_internal_encoding('UTF-8'); 

// Suppression des messages warning 
error_reporting(0); 

// Paramètres SGBD MySQL 
$serveur_mysql = "localhost";
$utilisateur_mysql =  "root";
$mot_de_passe_mysql = "";
$bdd_mysql = "veterinaire";

$id = $_GET['id'];
// Requête SQL 
$requete_sql = "DELETE FROM `client` WHERE id = '$id';";

// Connexion MySQLi à la BDD MySQL 
$bdd = mysqli_connect( 
        $serveur_mysql, 
        $utilisateur_mysql, 
        $mot_de_passe_mysql, 
        $bdd_mysql 
        ); 
if (mysqli_connect_errno()) { 

    // Problème de connexion au serveur MySQL 
    die('<p>Connexion au serveur MySQL : Erreur ' . mysqli_connect_error().'</p>'); 

} 
else { 

    // Connexion au serveur MySQL réussie 
    // echo '<p>Connexion au serveur MySQL : OK</p >'; 

    // Exécution de la requête SQL 

	mysqli_query($bdd, $requete_sql);
	
    // Libération du Recordset 

    mysqli_free_result($resultat);
	
}
?>