<?php

require 'Input.php';

$_REQUEST = [
  'somenumber' => '42',
  'notanumber' => 'fourty two',
  'notastring' => ['1', '2', '3'],
];

var_dump(Input::getString('notastring'));

var_dump(Input::getNumber('notanumber'));
