<?php

if (!function_exists('FoundationPress_scripts')) :
    function FoundationPress_scripts() {

        // deregister the jquery version bundled with wordpress
        wp_deregister_script( 'jquery' );

        // register scripts
        wp_register_script( 'modernizr', get_template_directory_uri() . '/js/modernizr/modernizr.min.js', array(), '1.0.0', true );
        wp_register_script( 'jquery', get_template_directory_uri() . '/js/jquery/dist/jquery.min.js', array(), '1.0.0', true);
        wp_register_script( 'jquery.turbolinks', get_template_directory_uri() . '/js/jquery.turbolinks.min.js', array(), '2.0.2', true);
        wp_register_script( 'foundation', get_template_directory_uri() . '/js/app.js', array('jquery'), '1.0.0', true );
        wp_register_script( 'turbolinks', get_template_directory_uri() . '/js/turbolinks.min.js', array(), '2.0.3', true);

        // enqueue scripts
        wp_enqueue_script('modernizr');
        wp_enqueue_script('jquery');
        wp_enqueue_script('jquery.tubolinks');
        //add files below this line
        wp_enqueue_script('foundation');
        wp_enqueue_script('turbolinks');

    }

add_action( 'wp_enqueue_scripts', 'FoundationPress_scripts' );
endif;


function add_xhr_location(){
  header("X-XHR-Current-Location: ". selfURL());
}

add_action('template_redirect', 'add_xhr_location');


//http://stackoverflow.com/questions/2236873/getting-the-full-url-of-the-current-page-php
function selfURL()
{
    $s = empty($_SERVER["HTTPS"]) ? '' : ($_SERVER["HTTPS"] == "on") ? "s" : "";
    $protocol = "http".$s;
    $port = ($_SERVER["SERVER_PORT"] == "80") ? "" : (":".$_SERVER["SERVER_PORT"]);
    return $protocol."://".$_SERVER['SERVER_NAME'].$port.$_SERVER['REQUEST_URI'];
}

?>
