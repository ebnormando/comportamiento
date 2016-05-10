<?php 
    if(empty($_POST['message']) ||
        empty($_POST['name']) ||
        empty($_POST['email']) ||
        !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
    {
        echo "Algo salió mal. Intenta de nuevo."
        return false;
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'carlos@hacktheworld.io';
    $email_subject = "HTW Contact Form: $name";
    $email_body = "Has recibido un nuevo mensaje de $name.\nCorreo: $email.\nEste es su mensaje: $message.\n";
    $headers = "From: carlos.gtz.94@gmail.com";
    $headers = "Reply-to: $email";
    mail($to,$email_subject,$email_body,$headers);


?>
