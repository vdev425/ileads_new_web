<?php
/**
 * Server Mail Script for iLeads Forms
 * 
 * This script uses PHP's mail() function to send emails
 * without requiring SMTP configuration.
 * 
 * Place this file on your server and update PHP_MAIL_ENDPOINT
 * in .env.local to point to this script's URL.
 */

// Allow cross-origin requests from your Next.js app
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
if (!isset($data['to']) || !isset($data['subject']) || !isset($data['html'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields: to, subject, html']);
    exit();
}

$to = $data['to'];
$subject = $data['subject'];
$htmlMessage = $data['html'];
$type = $data['type'] ?? 'general';

// Set email headers for HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: iLeads <noreply@ileads.co.in>' . "\r\n";
$headers .= 'Reply-To: info@ileads.co.in' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

// Send email using PHP mail() function
$success = mail($to, $subject, $htmlMessage, $headers);

if ($success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully',
        'type' => $type
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email',
        'type' => $type
    ]);
}
?>
