<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Markdown Parser Configurations
    |--------------------------------------------------------------------------
    |
    | Here you may define the configuration arrays for each markdown parser.
    | You may use the base CommonMark options as well as any extensions'
    | options here. The available options are in the CommonMark docs.
    |
    | https://statamic.dev/extending/markdown#configuration
    |
    */

    'configs' => [

        'default' => [
            'heading_permalink' => [
                'symbol' => '',
                'insert' => 'after',
                'apply_id_to_heading' => true,
                'min_heading_level' => 2,
                'max_heading_level' => 3,
            ],
        ],

    ],

];
