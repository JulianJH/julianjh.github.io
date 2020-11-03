<?php

global $paths;
$paths[] = "";    

function the_title() {
  global $title;

  echo $title;
}

function home_url() {
  echo ABS_URL;
}

function the_def ($def) {
  global $def1;
  global $def2;
  global $def3;
  global $def4;
  global $def5;
  global $def6;

  switch ($def) {
    case 1:
    echo $def1;
    break;

    case 2:
    echo $def2;
    break;

    case 3:
    echo $def3;
    break;

    case 4:
    echo $def4;
    break;

    case 5:
    echo $def5;
    break;

    case 6:
    echo $def6;
    break;
  }
}

?>
