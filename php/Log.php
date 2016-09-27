<?php 

class Log
{
	public $filename;
	public $dateForLogFile;
	public $handle;

	function __construct($prefix = 'log')
	{
		$this->dateForLogFile = date("Y_m_d");
		$this->filename = $prefix . '_' . $this->dateForLogFile . '.log';
		$this->handle = fopen($this->filename, 'a');
	}

	function logMessage($logLevel, $message)
	{
		$this->filename = "log-{$this->dateForLogFile}.log";
		$today = date("Y-m-d H:i:s");
		$logInfo = $today . " " . '[' . $logLevel . ']' . " " . $message . PHP_EOL;
		fwrite($this->handle, $logInfo);
	}

	function info($message)
	{
		$this->logMessage('Info', $message);
	}

	function error($message)
	{
		$this->logMessage('Error', $message);
	}

	function __destruct()
	{
		fclose($this->handle);
	}

}