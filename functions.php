<?php
/**
 * GeneratePress Child Theme functions and definitions
 *
 * All functions are prefixed with gpc_
 *
 * @package GenerateChild
 */
add_filter( 'upload_mimes', function( $mimes ) {
    $mimes['woff']  = 'application/x-font-woff';
    $mimes['woff2'] = 'application/x-font-woff2';
    $mimes['ttf']   = 'application/x-font-ttf';
    $mimes['svg']   = 'image/svg+xml';
    $mimes['eot']   = 'application/vnd.ms-fontobject';

    return $mimes;
} );


add_action('admin_head', 'gutenberg_improvements');

function gutenberg_improvements() {
    echo '<style>
    .wp-block{
        max-width: 90%;
    }
    .block-editor-block-list__block.wp-block-column.wp-block-column, .wp-block-columns{
        border: 1px solid red;
    }
    .block-editor-block-list__block.wp-block-column.wp-block-column:hover{
        border: 1px solid aqua;
    }
    .wp-block-group{

        border: 1px solid #0F0;
    }
    .wp-block-columns{
        padding: 10px !important;
    }
    .wp-block-columns:hover{
        border: 1px solid #ff008f !important;
    }*/
    .wp-block-group:hover{
        border: 1px solid #00ff00 !important;
    }*/
    </style>';
}

add_action( 'after_setup_theme', 'lex_gutenberg_css' );

function lex_gutenberg_css(){

    add_theme_support( 'editor-styles' ); // if you don't add this line, your stylesheet won't be added
    add_editor_style( 'dist/style.css' ); // tries to include style-editor.css directly from your theme folder

}

add_action( 'after_setup_theme', 'lex_register_colors' );

function lex_register_colors() {
    
    add_theme_support(
        'editor-color-palette', array(
            array(
                'name'  => esc_html__( 'Magenta', 'lex' ),
                'slug' => 'magenta',
                'color' => '#f50c5d',
            ),
            array(
                'name'  => esc_html__( 'Teal', 'lex' ),
                'slug' => 'teal',
                'color' => '#31a7a7',
            ),
            array(
                'name'  => esc_html__( 'Blue', 'tk' ),
                'slug' => 'blue',
                'color' => '#163593',
            ),
            array(
                'name'  => esc_html__( 'Gray', 'tk' ),
                'slug' => 'gray',
                'color' => '#f7f7f7',
            ),
            array(
                'name'  => esc_html__( 'Gray-2', 'tk' ),
                'slug' => 'gray-2',
                'color' => '#f4f4f4',
            ),
            array(
                'name'  => esc_html__( 'Black', 'tk' ),
                'slug' => 'black',
                'color' => '#000',
            ),
        )
    );
}

function wnetrze( ) {
    ob_start();
    	get_template_part( 'includes/wnetrze' );
    return ob_get_clean();
}
add_shortcode( 'wnetrze', 'wnetrze' );

function pp( ) {
    ob_start();
    	get_template_part( 'includes/pp' );
    return ob_get_clean();
}
add_shortcode( 'pp', 'pp' );


function prop( ) {
    ob_start();
    	get_template_part( 'includes/prop' );
    return ob_get_clean();
}
add_shortcode( 'prop', 'prop' );





function eg_enqueue_scripts() {
	wp_enqueue_script( 'eg-scripts', get_stylesheet_directory_uri() . '/js/scripts.js', array( 'jquery' ), false, true );
	// wp_enqueue_style( 'product', get_stylesheet_directory_uri() . '/styles/product.css',false,'1.1','all'); 404 not found in dev tools
	wp_enqueue_style( 'vite-styles', get_stylesheet_directory_uri() . '/dev/dist/index.css' ,false, false, 'all' );
	wp_enqueue_script( 'vite-scripts', get_stylesheet_directory_uri() . '/dev/dist/global.js', array( 'jquery' ), false, true );

}

add_action( 'wp_enqueue_scripts', 'eg_enqueue_scripts' );