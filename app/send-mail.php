<?php
	$to = "sinelnikovdmitriy@yandex.ru";
	// емайл получателя 


	//Заявка оставленна
	$time = date("H-i-s d/m/Y");
	//С сайта
	$site = "vape";
	// с IP:
	$ip = $_SERVER['REMOTE_ADDR'];

	//Имя:
	$name = isset($_POST['name']) ? $_POST['name'] : "";
	//Телефон
	$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
	//Никотин
	$nikotin = isset($_POST['nikotin']) ? $_POST['nikotin'] : "";




	// тема письма 
	$message = "Заявка: <br>Дата: ".$time."<br>С сайта ".$site."<br>с IP: ".$ip."<br><br>Имя: ".$name."<br>Телефон: ".$phone."<br>Никотин: ".$nikotin; 


	$mailheaders = "Content-type:text/html;charset=utf-8\r\n"; 
	// формат письма html

	$mailheaders .= "From: SiteRobot <noreply@siterobot.ru>\r\n"; 
	$mailheaders .= "Reply-To: noreply@siterobot.ru\r\n"; 
	// емайл отправителя и емайл для ответа 
	
	mail($to, $subject, $message, $mailheaders);
	// отправляем письмо */
