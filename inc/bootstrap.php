<?php
$root_path = $_SERVER['DOCUMENT_ROOT'] . "/unitedwaywhatcom";
if (getenv('PREVIEW')) {
    $root_path = dirname(__DIR__);
}
