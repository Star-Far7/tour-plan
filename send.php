<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
// в зависимости от пришедшей формы формируем сообщение:
if(isset($_POST['email'])){
    if(isset($_POST['name'])){
        $title = "ЗАГЛАВНЫЙ ЗАГОЛОВОК";
        $body = "
        <h2>Письменное письмо</h2>
        <b>Имя:</b> $name<br>
        <b>Номер:</b> $phone<br>
        <b>Email:</b> $email<br><br>
        <b>Сообщение:</b><br>$message";
    } else {
        $title = "ЗАГЛАВНЫЙ ЗАГОЛОВОК";
        $body = "
        <h2>Письменное письмо</h2>
        <b>Email:</b> $email<br><br>";      
    }

} else {
    // если нет, отправлена форма с телефоном и пр.
    $title = "ЗАГЛАВНЫЙ ЗАГОЛОВОК";
    $body = "
    <h2>Письменное письмо</h2>
    <b>Имя:</b> $name<br>
    <b>Номер:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'ushyoto@gmail.com'; // Логин на почте
    $mail->Password   = '4KaUug4z'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ushyoto@gmail.com', 'Nikolla_Zzz'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('starfar98@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');