<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitd06bd6f43463ba80f69d3ae27ca966e0
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitd06bd6f43463ba80f69d3ae27ca966e0', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitd06bd6f43463ba80f69d3ae27ca966e0', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitd06bd6f43463ba80f69d3ae27ca966e0::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}