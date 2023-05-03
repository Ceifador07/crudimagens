<?php
$local = 'localhost';
$dbname = 'CrudImagens';
$usuario = 'root';
$senha = '';

$pdo = new PDO("mysql:host=".$local.";dbname=".$dbname.";",$usuario,$senha);

?>