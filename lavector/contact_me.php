<?php header('Content-type: text/plain; charset=utf-8');
Date_default_timezone_set("PRC");

$servername = "127.0.0.1";
$username = "root";
$password = "passw0rd";
$dbName = "lavector";
$conn = new mysqli($servername, $username, $password, $dbName);
$conn->query("SET NAMES UTF8"); 

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$name = $_REQUEST["name"];
$corporation = $_REQUEST["corporation"];
$email = $_REQUEST["email"];
$message = $_REQUEST["message"];
$phone = $_REQUEST["phone"];
$today = date("Y-m-d H:i:s"); 

$stmt = $conn->prepare("INSERT INTO www_contact (real_name, corporation, message, email, phone, reply, created_date) VALUES ( ?, ?, ? ,? , ?, 0, now())");
$stmt->bind_param("sssss", $name, $corporation, $message, $email, $phone);

if ($stmt->execute() === TRUE) {
    $stmt->close();
    $conn->close();
    echo "success";
}else {
    $stmt->close();
    $conn->close();
    echo "error";
}

sendMailToContact($name, $corporation, $email, $message, $phone, $today);

function sendMailToContact($name, $corporation, $email, $message, $phone, $today) {
    $to      = "support@lavector.com";
    $subject = "网站用户联系";
    $message = getMailBody($name, $corporation, $email, $message, $phone);
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers = "From: service@lavector.com" . "\r\n" .
    $headers .= "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);   
}


function getMailBody($name, $corporation, $email, $message, $phone) {
    $body = "
        {$name}的用户反馈
    
        姓名: {$name}
    
        公司: {$corporation}
        
        邮箱: {$email}
        
        电话: {$phone}
        
        留言/意见/建议: {$message}
        
        ";
    return $body;
}

?>
