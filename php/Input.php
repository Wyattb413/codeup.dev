<?php

class Input
{
    /**
     * Check if a given value was passed in the request
     *
     * @param string $key index to look for in request
     * @return boolean whether value exists in $_POST or $_GET
     */
    public static function has($key)
    {
        return isset($_REQUEST[$key]);
    }

    public static function hasPost()
    {
        return !empty($_POST);
    }

    /**
     * Get a requested value from either $_POST or $_GET
     *
     * @param string $key index to look for in index
     * @param mixed $default default value to return if key not found
     * @return mixed value passed in request
     */
    public static function get($key, $default = null)
    {
        $value = self::has($key) ? $_REQUEST[$key] : $default;
        return $value;
    }

    public static function getString($key, $min = null, $max = null)
    {
      $value = self::get($key);
      if (!is_string($value)) {
        throw new InvalidArgumentException($key . ' Must Be A String');
      }
      if (!is_numeric($min) && $min != null) {
        throw new InvalidArgumentException($min . ' Must Be A Number');
      }
      if (!is_numeric($max) && $max != null) {
        throw new InvalidArgumentException($max . ' Must Be A Number');
      }
      if ($value == null) {
        // throw new Exception($key . ' Cannot Be Empty');
        throw new OutOfRangeException($key . ' Cannot Be Empty');
      }
      if (gettype($value) != 'string') {
        // throw new Exception($key . ' Must Be A String');
        throw new DomainException($key . ' Must Be A String');
      }
      if ($value < $min && $value > $max) {
        throw new OutOfRangeException($key . ' Must be greater than ' . $min . ' and less than ' . $max);
      }
      return $value;
    }

    public static function getNumber($key, $min = null, $max = null)
    {
      $value = self::get($key);
      if (!is_string($value)) {
        throw new InvalidArgumentException($key . ' Must Be A String');
      }
      if (!is_numeric($min)) {
        throw new InvalidArgumentException($min . ' Must Be A Number');
      }
      if (!is_numeric($max)) {
        throw new InvalidArgumentException($max . ' Must Be A Number');
      }
      if ($value == null) {
        // throw new Exception($key . ' Cannot Be Empty');
        throw new OutOfRangeException($key . ' Cannot Be Empty');
      }
      if (!is_numeric($value)) {
        // throw new Exception($key . ' Must Be A Number');
        throw new DomainException($key . ' Must Be A Number');
      }
      if ($value < $min || $value > $max) {
        throw new OutOfRangeException($key . ' Must be greater than ' . $min . ' and less than ' . $max);
      }
      return $value;
    }

    public static function getDate($key)
    {
      if(!self::has($key)) {
        // throw empty exception
      } else {
        try {
          $date = new DateTime(self::get($key));
        } catch (Exception $e) {
          throw new InvalidArgumentException;
        }
      }

      return $date;

      // $value = self::get($key);
      // $verify_arr = explode('-', $value);
      // if (checkdate($verify_arr[0], $verify_arr[1], $verify_arr[2])) {
      //   return $value;
      // } else {
      //   throw new Exception($key . ' Is Not A Valid Date');
      // }
    }

    ///////////////////////////////////////////////////////////////////////////
    //                      DO NOT EDIT ANYTHING BELOW!!                     //
    // The Input class should not ever be instantiated, so we prevent the    //
    // constructor method from being called. We will be covering private     //
    // later in the curriculum.                                              //
    ///////////////////////////////////////////////////////////////////////////
    private function __construct() {}
}
