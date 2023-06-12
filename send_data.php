<?php
//========= creation des variables php associee au formulaire html=========
$name=$_POST["name"];
$email=$_POST["email"];
$subject=$_POST["subject"];
$message=$_POST["message"];
//===============creation des variables de connection=============================
$host="localhost";
$dbname="contact_me";
$username="root";
$password="";
//==================connection a la base de donnees=======================
$con=mysqli_connect(hostname:$host,username:$username,password:$password,database:$dbname);
if(mysqli_connect_errno()){
    die("connection error".mysqli_connect_errno());
}
//======================insertion des donnees=========================
$sql= "insert into contact(name,email,subject,message)values(?,?,?,?)";
$stmt =mysqli_stmt_init($con);
 if ( ! mysqli_stmt_prepare($stmt,$sql)){
    die(mysqli_error($con)); 
    
    if($result){
        //echo "data insert success";
        header('location:index.html');
      }
      else{
        die(mysqli_error($con));
      }
 }
 mysqli_stmt_bind_param($stmt,"ssss",$name,$email,$subject,$message);
mysqli_stmt_execute($stmt);
?>